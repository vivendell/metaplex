const nm1 = [
  'calm',
  'carefree',
  'casual',
  'fast-paced',
  'hectic',
  'laid-back',
  'nonchalant',
  'normal',
  'ordinary',
  'peaceful',
  'quiet',
  'relaxed',
  'rough',
  'secluded',
  'smooth',
  'stable',
  'stressful',
  'unexciting',
];
const nm2female = [
  'teenage girl',
  'young girl',
  'woman',
  'girl',
  'elderly woman',
];
const nm2male = ['man', 'boy', 'teenage boy', 'young guy', 'elderly man'];
const nm3 = [
  'is going the complete opposite way',
  'changes in an instant',
  'changes for better or worse',
  'is going in a different direction',
  'will change forever',
  'might be changing forever',
  'has a chance to change, for better or worse,',
  'will be changed completely',
  'take a sharp turn',
  'might turn out differently',
  'will be permanently altered',
];
const nm4female = [
  'strange woman',
  'lost friend',
  'strange girl',
  'new friend',
  'childhood friend',
  'friendly acquaintance',
  'neighbor',
  'stranger',
];
const nm4male = [
  'strange man',
  'lost friend',
  'strange boy',
  'new friend',
  'childhood friend',
  'friendly acquaintance',
  'neighbor',
  'stranger',
];
let nm5 = ' his ';
const nm6 = [
  'plays a vital role in the survival of the universe and must come along to train for battle or else the universe might be lost forever',
  'is a relative, but that this information was lost in the hospital until recently. This person would like to stay over and catch up on lost time',
  "is actually part of a 'sub-species' of humans with hidden powers and wants to show what these hidden powers can do",
  'is heir to a fortune, which includes a big piece of land with a mansion. The person has arranged transport to this mansion, any relatives can come',
  "is the 'chosen one' according to an ancient prophecy. The prophecy states the chosen one will save the world, but only if properly trained. There is no time to waste",
  "will be rewarded if shelter is provided against the forces that supposedly chase this 'wanted fugitive'",
  'is in possession of a powerful artifact, an artifact which looks like any ordinary object, but an artifact which is of the utmost importance to this person, who will offer a reward for it',
  'is in possession of a powerful artifact, one which looks like any other object, but one which could bring total destruction if fallen in the wrong hands. The person wishes to destroy it, with or without help',
  'plays a vital role in the future, but that this version of the future cannot be allowed to be. The only way to prevent it is by traveling in time with this supposed time traveler',
  "is actually stuck within a dream world, a world from which there is only one way out and this 'dream person' will show the way",
  'is part of an ancient lineage of gods and titans and that the time has come to awaken the godly powers within, as the world could use a just god right now',
  "is now part of a murder investigation and might be the number one suspect, no arrest will be made in front of possible friends and neighbors if there's no resistance",
  "lives right above an ancient, hidden treasure. If assistance is provided, the treasure will be shared and this 'treasure hunter' will provide all the needed tools",
  'is in grave danger. Supposedly a psycho killer is lurking nearby, studying every move, ready to strike at any moment. The person claims to know the killer and offers protection from this psycho',
  "is part of a secret agent program and his leaders are on their way to 'activate' him through a secret code word. The person claims to have escaped activation and offers escape from these supposed leaders",
  'is the descendant of a lineage of warriors who have protected the world throughout history. The time has come to step in the footsteps of these ancestors and help protect the world of today',
  "is actually already dead, a spirit trapped in a state of denial, not ready to move on yet. The person claims there's proof of this elsewhere",
  "was a witness of a horrific crime, a crime for which an innocent person is in jail for. Due to the horrific nature of the crime the memory was likely blocked, but there's a way to unblock it and save an innocent life",
  'looks exactly like an evil leader and this offers a perfect opportunity to take out this leader through deception and spy games, which, although very risky, would save millions of innocent lives',
  "is a host to an alien being, one who is still benign right now, but could take over the brain when it has grown to maturity. Fortunately there's a way to get rid of it and potentially unlock the key to get rid of all these aliens",
  'has a DNA strain which very likely offers the key to cure several crippling diseases. Tests will have to be done, but the key to save millions of lives is within the grasp of science through this DNA strain',
  'is chosen to be one of the few lucky people who get to leave Earth on the enormous spaceship planned to leave before the imminent end of Earth',
  'is in grave danger, an imminent volcanic eruption will soon destroy the entire town, everybody has to leave right now or risk getting caught in the eruption',
  "is part of a fake life, one created and directed by people with a god complex. There's no time to explain everything here, they might be watching",
  "is in danger, war is upon us all, enemy forces have already landed in a nearby coastal town, if this town doesn't evacuate right now it'll likely get caught in a horrible battle",
  'is now the citizen of a different country. The old country has just been taken over by an enemy force, everybody who wishes to leave this new nation has 3 days to do so',
  'is the reborn prophet and the bringer of peace and redemption to all. Yes, it sounds crazy and incredible, but proof is in the scripts at a nearby temple',
  'is chosen to be trained in the prestigious way of an ancient martial arts, which has been used to defend the nation for centuries. Two hours are given to decide whether to accept or decline this incredible offer',
  "is heir to an incredible fortune, all paperwork has been taken care of already, all there's left to do is sign them",
  "has been chosen to compete against others of other regions in a 'competition'. The winner will gain not only the honor and glory of winning, but will also never need for anything for the rest of their life",
  'is living on a crossing of ancient, magic ley lines which could hold the power to bring balance and peace to this world, but the house would need to be destroyed to access this power',
  'is in for a fun day. A new casino opened up in town and is giving everybody a free roll on their slot machine, with a little luck who knows what could happen',
  "might wish to stay away from the capitol this evening as this person has something 'grand' planned. Before there's a chance to reply this strange person has moved on",
  "is never going to believe his eyes, dragons have returned and are currently gathering at the nearby mountain range. Nobody knows why they're back nor what they have planned, but it's safe to take a look from a distance",
  "is needed, all capable hands are needed. The dam is breaking and if we don't get every person working on repairing it the entire town might be destroyed by the following flood",
  "is in for a treat this afternoon. Supposedly this strange person has discovered a way to unlock the hidden potentials of the brain and will show the whole town this afternoon, it's not an event you want to miss",
  "can pick one person in the entire world and that person will die. An evil dictator? Some crazy terrorist? A childhood bully? Pick whoever you wish, this man will supposedly take care of it, but there's only 12 hours to decide",
  "is no longer an assumed orphan, the father has been found and what a magnificent man he is. He's waiting at the town hall, ready to make up for leaving family life so early",
  'is actually the rightful heir to the throne, this information has obviously been kept secret by the current holders of the throne, but once this information gets out to the public the people will surely stand behind the true heir',
  "has been corrupted by evil, something which has happened at birth and something which happens to a lot of people. The evil remains harmless until fully grown, but once it reaches maturity true evil will take over the mind. Fortunately there's a way to cleanse the body of this evil",
  "will have to make a choice: join the army or leave the country. The nation is at war and everybody is needed to win it. Who started it and what the reason is is 'not a concern for the people', but a choice must be made and it's implied the army is the right choice",
  "is one of the rare few people in possession of a guardian animal spirit. It's widely known these exist and rituals are held on a near weekly basis to connect with these guardian spirits, now its time to be the center of that ritual",
  'is needed for a silent march to protest the violence enacted in the name of the government. Everybody is needed to send a strong message, the government cannot ignore this message nor do anything else but accept it',
  "will have to leave town within 2 hours or risk being stuck in a quarantine zone. There will be traffic jams and other hindrances, so it's best to leave right now without taking anything with you",
  'better leave the city now. The rivaling gangs have spiraled into an all out war, soon the entire city will be a battleground and the government apparently plans to surround the city and let the gangs fight it out, better to let them kill each other than risk soldier lives they say',
  'will need to find a new home as this current house will be demolished by the government in order to make room for a highway. A large sum of money will be paid if the house is left within a week',
  'this town will be under attack soon, but weapons will be provided to all who are willing to fight for their freedom. The person leaves without explaining about who attacks or anything else which would be important to know',
  'is now cursed along with everybody else in this town. Why? By whom? What kind of curse exactly? Nobody seems to know, but the person supposedly responsible for this curse will explain everything at the town hall this afternoon, everybody should come',
  'has been seen committing several crimes by a lot of eye witnesses, but this person claims to know it was an imposter, an exact look-a-like, and offers a way out of what will undoubtedly be a very tricky situation',
  'is needed right now in the town center. A dangerous criminal is holding people hostage and is asking for 3 specific people to show up. The identity of the criminal is unknown, but innocent lives are at stake',
];
const nm7 = [
  'Unsure about everything, including',
  'Unsure what to think of all this and of',
  'Distrusful of both this situation and of',
  'Skeptical of this situation and of',
  'Suspicious of this situation, but somewhat trusting of',
  'Concerned of the situation and a little distrusful of',
  'Unconvinced of the situation, but trusting of',
  'Certain of the truth in this situation and of',
  'Believing both the situation and',
  'Sure of the truth in this situation, but somewhat distrustful of',
];
const nm8 = [
  'hesitantly',
  'cautiously',
  'somewhat reluctantly',
  'warily',
  'tentatively',
  'somewhat hesitantly',
  'somewhat grudgingly',
  'somewhat keenly',
  'oddly enthusiastically',
  'hastily',
  'oddly willingly',
  'unusually eagerly',
  'somewhat gladly',
];
const nm9 = [
  'if only to satisfy the nagging feeling of curiosity',
  "it's probably best to get to the bottom of this as soon as possible",
  "but there's no time to waste, a decision had to be made quickly",
  'it was probably a good idea to make a quick decision anyway',
  "the situation is all too strange, it's best to get more information as soon as possible",
  "there's no knowing what the right choice is anyway, so it's best to make one fast",
  'if anything this will at least speed things up, for better and for worse',
  "but for some reason a nagging feeling of 'this is a bad choice' won't go away",
  "it might be a mistake, but both options could've been the mistake, one had to be chosen",
  'but something does feel very wrong about this whole situation, hopefully the right choice was made',
  'it all feels very exciting, as if a big adventure was about to begin',
  "there's something exciting about this whole situation, surely the right choice was made",
  'there must be truth to all this and if so, this was the right choice to make',
  "there's no way this is all a lie, right? If it is, a terrible choice might have been made",
  'no matter what, something has to be done in this situation, hopefully this was the right choice',
  'surely this was the right choice to make, all of this has to have some truth to it',
  'this whole situation is both exciting and terrifying at the same time, but surely the right choice was made',
  "if all this turns out to be false, this choice will seem foolish, but it's still worth checking out",
  'the choice was made fast, perhaps too fast, but this situation requires quick thinking',
  'it all seemed rather odd, but there was no time to waste and a choice had to be made',
];
const nm10 = [
  "can't be trusted",
  'is trying to manipulate the situation',
  'is not speaking the truth',
  'is just a crazy person',
  'cannot be relied upon',
  'speaks only lies',
  'is a con artist',
  'is trying be misleading',
  'is wrong about all this',
  'is pulling a prank',
];
const nm11 = [
  'all this is an elaborate trap',
  'the complete opposite is true',
  'everything told is completely true',
  'this is all far bigger than what has been told',
  'the situation has changed or will change',
  "there's a change of mind",
  'this proposal is wrong or missing important details',
  'the wrong person was picked for this',
  'the situation is worse than it appears',
  'somebody is orchestrating all of this',
];
const nm12 = [
  'be this important to the situation',
  'be needed for a situation like this',
  'be this lucky, or unlucky, depending on the turnout',
  'end up in a situation like this',
  'play a part in all this',
  'come out of this situation in a better way',
  'be helpful at all in this situation',
  'figure out the truth in all of this',
  "find out what's happening without help",
  'be relied upon in something this big',
];
const nm13 = [
  'Time will tell',
  'Only one way to find out',
  "We're about to find out",
  'No turning back now though',
  'Time to find out',
  'Either way, the choice has been made',
];

/**
 *
 * @param type - 1 = female;
 */
export function generatePlot(type) {
  const nm2array = type === 1 ? nm2female : nm2male;
  const nm4array = type === 1 ? nm4female : nm4male;
  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2array.length);

  if (rnd2 < 5) {
    nm5 = ' her ';
  }
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd4 = Math.floor(Math.random() * nm4array.length);
  const rnd6 = Math.floor(Math.random() * nm6.length);
  const rnd7 = Math.floor(Math.random() * nm7.length);
  const rnd8 = Math.floor(Math.random() * nm8.length);
  const rnd9 = Math.floor(Math.random() * nm9.length);
  const rnd10 = Math.floor(Math.random() * nm10.length);
  const rnd11 = Math.floor(Math.random() * nm11.length);
  const rnd12 = Math.floor(Math.random() * nm12.length);
  const rnd13 = Math.floor(Math.random() * nm13.length);
  const paragraph1 =
    'The ' +
    nm1[rnd1] +
    ' life of a ' +
    nm2array[rnd2] +
    ' ' +
    nm3[rnd3] +
    ' as a ' +
    nm4array[rnd4] +
    ' enters ' +
    nm5 +
    ' life.';
  const paragraph2 =
    'The ' +
    nm4array[rnd4] +
    ' claims the ' +
    nm2array[rnd2] +
    ' ' +
    nm6[rnd6] +
    '. ' +
    nm7[rnd7] +
    ' this ' +
    nm4array[rnd4] +
    ', the ' +
    nm2array[rnd2] +
    ' ' +
    nm8[rnd8] +
    ' agrees to the proposal, ' +
    nm9[rnd9] +
    '.';
  const paragraph3 =
    'But what if this ' +
    nm4array[rnd4] +
    ' ' +
    nm10[rnd10] +
    '. Or what if ' +
    nm11[rnd11] +
    '. How could an ordinary ' +
    nm2array[rnd2] +
    ' ' +
    nm12[rnd12] +
    '. ' +
    nm13[rnd13] +
    '.';

  return { paragraph1, paragraph2, paragraph3 };
}
