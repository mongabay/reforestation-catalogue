import os
import pandas as pd
import numpy as np
import json

IN_PATH = './input/'
def importCsv(in_path=IN_PATH):
    files = [f for f in os.listdir(in_path) if '.csv' in f]
    
    if files and len(files) == 1:
        in_file = files[0]
        
    elif files:
        print("Multiple csv fils encountered in ./input:")
        for i,file in enumerate(files):
            print(f"{i+1}) {file}") 
        print("Select item number: ")
        conf = input()
        if conf and (0 < int(conf) <= i+1):
            in_file = files[int(conf)-1]
        else:
            print(f'Requires valid input between 1 and {i+1}')

    ## Ignore top level header (type) and first level header (data type)
    df = pd.read_csv(in_path + in_file, header=[2]).replace(np.nan, '', regex=True)
    if not validateCols(df):
        return None
    
    parsed_df = convertColumns(df)
    data_json = parsed_df.to_dict(orient='records')
    is_saved = saveData(data_json)

    print(f"Data ingstion {'successful' if is_saved else 'failed'}.")
    return data_json

EXPECTED_KEYS = ['Project Number', 'Project Name', 'Lead organization', 'Organization Type', "Who's involved", 'Project/Org. URL', 'Has project partners', 'Partner Name', 'Start Year', 'End Year', 'Country', 'Country Code', 'Size of project (ha)', 'Trees planted (number)', 'Has explicit location', 'Forest Type', 'Primary objective/purpose', 'Approach', 'Identify deforestation driver', 'Fire prevention', 'Has justification for approach', 'Addresses known threats', 'Discloses species used', 'Use native species', 'Use exotic species', 'Local seedling nurseries', 'Financial model', 'Name Org/Donor', 'Has public reports', 'Follow up disclosed', 'Type of follow up', 'Has community involvement', 'Has gender component', 'Scientific research associated with project', 'News articles associated with project', 'comment']
def validateCols(df, validation_keys=EXPECTED_KEYS):
    data_cols = list(df.columns) 
    validated_cols = {k: k in data_cols for k in validation_keys}
    if not all(validated_cols.values()):
        missing_keys = ', '.join([f'"{key}"' for key,found in validated_cols.items() if not found])
        print(f'ERROR! Data fields not found: {missing_keys}.')
        return False
    
    new_cols = {c: c in validation_keys for c in data_cols}
    if not all(validated_cols.values()):
        new_keys = ', '.join([f'"{key}"' for key,expected in new_cols.items() if not expected])
        print(f'WARNING! Unexpected data fields found (these will not be imported): {new_keys}.')
    
    return True

from slugify import slugify
def toCamel(s):
    snake_str = slugify(s, separator='_', replacements=[["'s",' is']])
    first_word, *others = snake_str.split('_')
    return ''.join([first_word.lower(), *map(str.title, others)])

def convertColumns(df):
    cols = df.columns
    slug_mapping = {k:toCamel(k) for k in cols}
    parsed_df = df.rename(columns=slug_mapping)
    return parsed_df

OUT_PATH = '../public/data'
def saveData(data, in_path=IN_PATH, out_path=OUT_PATH):
    #save a copy of the old json
    old_files = [f for f in os.listdir(out_path) if 'mongabay-data.json' in f]
    try:
        if old_files:
            old_file = out_path + f'/{old_files[0]}'
            with open(old_file, encoding='utf-8-sig') as f:
                old_data = json.load(f)

            backup_file = in_path + 'mongabay-data-copy.json'
            print(f'Backing up old data-json at "{backup_file}"')
            with open(backup_file, 'w') as f:
                json.dump(old_data,f)

        save_file = out_path + '/mongabay-data.json'
        print(f'Saving ingested data to "{save_file}"')
        with open(save_file, 'w') as f:
            json.dump(data,f)
        return True
    except:
        return False