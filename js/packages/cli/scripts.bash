for i in assets_mw/*.png; do uuid=$(uuidgen); mv "$i" assets_mw/"$uuid.png"; FILENAME=${i/.png/""};  mv "$FILENAME.json" assets_mw/"$uuid.json"; done

new=0;for i in assets_fw/*.json; do mv "$i" all/"$new.json"; FILENAME=${i/.json/""}; mv "$FILENAME.png" all/"$new.png"; ((new++)); done

for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.image = "'$INDEX'.png" | .properties.files[0].uri = "'$INDEX'.png"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done

for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.collection.name = "Elves of Vivendell"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done

for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.symbol = "ELVE"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.properties.creators[0].address = "2VFC2JSWqgvdrUft1VN2unRSA5PcRfb5QDWbNQazGJKg" | .properties.creators[0].share = 100' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done