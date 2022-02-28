#!/bin/bash

### bash script to generate the entire collection

### generate all

NUMBER_OF_IMAGES=300
# male dark

### generate all

generate_male() {
    echo "Generating male..."
    gen_white() {
        TYPE=male_white
        rm -rf assets_${TYPE}
        ts-node ./src/candy-machine-v2-cli.ts create_generative_art -n ${NUMBER_OF_IMAGES} -ta true \
            -c ./traits_male.json -t ./traits_${TYPE} -of ./assets_${TYPE}

    }

    gen_black() {
        TYPE=male_dark
        rm -rf assets_${TYPE}
        ts-node ./src/candy-machine-v2-cli.ts create_generative_art -n ${NUMBER_OF_IMAGES} -ta true \
            -c ./traits_male.json -t ./traits_${TYPE} -of ./assets_${TYPE}

    }

    gen_white &
    gen_black
}

generate_female() {
    echo "Generating female..."

    gen_white() {
        TYPE=female_white
        rm -rf assets_${TYPE}
        ts-node ./src/candy-machine-v2-cli.ts create_generative_art -n ${NUMBER_OF_IMAGES} -ta true \
            -c ./traits_female.json -t ./traits_${TYPE} -of ./assets_${TYPE}

    }

    gen_black() {
        TYPE=female_dark
        rm -rf assets_${TYPE}
        ts-node ./src/candy-machine-v2-cli.ts create_generative_art -n ${NUMBER_OF_IMAGES} -ta true \
            -c ./traits_female.json -t ./traits_${TYPE} -of ./assets_${TYPE}

    }

    gen_white &
    gen_black

}

generate_female &
generate_male

wait

### end generate all

### shuffle all
rm -rf assets
mkdir assets

echo "Shuffling everything..."
for type in male_dark male_white female_dark female_white; do

    cd assets_${type}

    # shuffle
    for i in *.png; do
        uuid=$(uuidgen)
        mv "$i" "$uuid.png"
        FILENAME=${i/.png/""}
        mv "$FILENAME.json" "$uuid.json"
    done

    # move everything to assets

    mv * ../assets

    cd ..

done

### end shuffle all

### order and rename all

cd assets
new=0

echo "Ordering assets..."
for i in *.json; do
    mv "$i" "$new.json"
    FILENAME=${i/.json/""}
    mv "$FILENAME.png" "$new.png"
    ((new++))
done

# rename
echo "Renaming assets..."
for i in *.png; do
    FILENAME=${i/.png/""}
    INDEX=${FILENAME}
    jq '.image = "'$INDEX'.png" | .properties.files[0].uri = "'$INDEX'.png"' $INDEX.json >tmp.$$.json && mv tmp.$$.json $INDEX.json
done

cd ..

### end order and rename all

node create_collection_items.js

cp collectionItems.json ~/workspace/rarity-score/data/collectionItems.json
rm -rf ~/workspace/rarity-score/public/*.png && cp assets/*.png ~/workspace/rarity-score/public/
