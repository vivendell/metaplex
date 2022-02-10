# add numbered ordering
new=0;for i in assets/*.json; do mv "$i" assets/"$new.json"; FILENAME=${i/.json/""}; mv "$FILENAME.png" assets/"$new.png"; ((new++)); done

# edit JSON
for i in assets/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/assets\//""}; jq '.image = "'$INDEX'.png" | .properties.files[0].uri = "'$INDEX'.png"' assets/$INDEX.json > tmp.$$.json && mv tmp.$$.json assets/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.collection.name = "Elves of Vivendell"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.symbol = "ELVE"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.properties.creators[0].address = "2VFC2JSWqgvdrUft1VN2unRSA5PcRfb5QDWbNQazGJKg" | .properties.creators[0].share = 100' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done

# shuffle
for i in *.png; do uuid=$(uuidgen); mv "$i" "$uuid.png"; FILENAME=${i/.png/""};  mv "$FILENAME.json" "$uuid.json"; done
for i in assets_mw/*.png; do uuid=$(uuidgen); mv "$i" assets_mw/"$uuid.png"; FILENAME=${i/.png/""};  mv "$FILENAME.json" assets_mw/"$uuid.json"; done
