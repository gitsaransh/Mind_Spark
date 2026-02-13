
import os

file_path = os.path.join('js', 'puzzles.js')

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace difficulty constants (already done, but keeping for safety/idempotency)
content = content.replace('DIFFICULTY.KID', 'DIFFICULTY.BEGINNER')
content = content.replace('DIFFICULTY.ADULT_KID', 'DIFFICULTY.INTERMEDIATE')
content = content.replace('DIFFICULTY.ADULT', 'DIFFICULTY.EXPERT')

# 2. Replace comments (already done, but keeping for safety)
content = content.replace(' - KID', ' - BEGINNER')
content = content.replace(' - ADULT KID', ' - INTERMEDIATE')
content = content.replace(' - ADULT', ' - EXPERT')

# 3. Replace IDs in specific order to avoid partial matches
# 'adult_kid' must be replaced before 'adult'
content = content.replace('_adult_kid_', '_intermediate_')
content = content.replace('_kid_', '_beginner_')
content = content.replace('_adult_', '_expert_')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Successfully updated js/puzzles.js with new IDs')
