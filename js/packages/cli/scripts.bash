# edit JSON
for i in assets/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/assets\//""}; jq '.image = "'$INDEX'.png" | .properties.files[0].uri = "'$INDEX'.png"' assets/$INDEX.json > tmp.$$.json && mv tmp.$$.json assets/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.collection.name = "Elves of Vivendell"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.symbol = "ELVE"' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done
for i in all/*.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME/all\//""}; jq '.properties.creators[0].address = "2VFC2JSWqgvdrUft1VN2unRSA5PcRfb5QDWbNQazGJKg" | .properties.creators[0].share = 100' all/$INDEX.json > tmp.$$.json && mv tmp.$$.json all/$INDEX.json; done


# --- scripts inside the folder ---
# shuffle
for i in *.png; do uuid=$(uuidgen); mv "$i" "$uuid.png"; FILENAME=${i/.png/""};  mv "$FILENAME.json" "$uuid.json"; done

# ordering
new=0;for i in *.json; do mv "$i" "$new.json"; FILENAME=${i/.json/""}; mv "$FILENAME.png" "$new.png"; ((new++)); done

# update name
for i in *.png;  do FILENAME=${i/.png/""}; INDEX=${FILENAME}; jq '.image = "'$INDEX'.png" | .name = "Elf '$INDEX'" | .properties.files[0].uri = "'$INDEX'.png"' $INDEX.json > tmp.$$.json && mv tmp.$$.json $INDEX.json; done

# --- end scripts inside the folder ---