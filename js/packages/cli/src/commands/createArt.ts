import os from 'os';
import { writeFile } from 'fs/promises';
import { createCanvas, loadImage } from 'canvas';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import log from 'loglevel';

import { readJsonFile } from '../helpers/various';

function makeCreateImageWithCanvas(
  order,
  width,
  height,
  traitsLocation: string,
  outputFolder: string,
) {
  return function makeCreateImage(canvas, context) {
    return async function createImage(image) {
      const start = Date.now();
      const ID = parseInt(image.id, 10) - 1;
      for (const cur of order) {
        const imageLocation = `${traitsLocation}/${cur}/${image[cur]}`;
        const loadedImage = await loadImage(imageLocation);
        context.patternQuality = 'best';
        context.quality = 'best';
        context.drawImage(loadedImage, 0, 0, width, height);
      }
      const buffer = canvas.toBuffer('image/png');
      context.clearRect(0, 0, width, height);
      const optimizedImage = await imagemin.buffer(buffer, {
        plugins: [
          imageminPngquant({
            quality: [0.6, 0.95],
          }),
        ],
      });
      await writeFile(`${outputFolder}/${ID}.png`, optimizedImage);
      const end = Date.now();
      log.info(`Placed ${ID}.png into ${outputFolder}.`);
      const duration = end - start;
      log.info('Image generated in:', `${duration}ms.`);
    };
  };
}

const CONCURRENT_WORKERS = os.cpus().length;

const worker = (work, next_) => async () => {
  let next;
  while ((next = next_())) {
    await work(next);
  }
};

export async function createGenerativeArt(
  configLocation: string,
  randomizedSets,
  traitsLocation: string,
  outputFolder: string,
) {
  const start = Date.now();
  const { order, width, height } = await readJsonFile(configLocation);
  const makeCreateImage = makeCreateImageWithCanvas(
    order,
    width,
    height,
    traitsLocation,
    outputFolder,
  );

  const imagesNb = randomizedSets.length;

  const workers = [];
  const workerNb = Math.min(CONCURRENT_WORKERS, imagesNb);
  log.info(`Instanciating ${workerNb} workers to generate ${imagesNb} images.`);
  for (let i = 0; i < workerNb; i++) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    const work = makeCreateImage(canvas, context);
    const w = worker(work, randomizedSets.pop.bind(randomizedSets));
    workers.push(w());
  }

  await Promise.all(workers);
  const end = Date.now();
  const duration = end - start;
  log.info(`Generated ${imagesNb} images in`, `${duration / 1000}s.`);
}
