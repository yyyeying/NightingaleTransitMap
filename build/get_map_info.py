import os
import json
from typing import List

MAP_DIR = os.path.join(os.getcwd(), "maps")

if __name__ == "__main__":
    print("***** get map info *****")
    all_map_dir_list: List[str] = os.listdir(MAP_DIR)
    for dir in all_map_dir_list:
        if not os.path.isdir(os.path.join(MAP_DIR, dir)):
            continue
        print("get info: {}".format(dir))
        map_list = []
        single_map_dir_list: List[str] = os.listdir(os.path.join(MAP_DIR, dir))
        for single_map_dir in single_map_dir_list:
            if not os.path.isdir(os.path.join(MAP_DIR, dir, single_map_dir)):
                continue
            print("get single map info: {}".format(single_map_dir))
            year: int = int(single_map_dir[:4])
            month: int = int(single_map_dir[4:6])
            day: int = int(single_map_dir[6:8])
            map_info = {"dir": single_map_dir,
                        "date": {"year": year, "month": month, "day": day}}
            map_list.append(map_info)
        with open(os.path.join(MAP_DIR, dir, "info.json"), "w") as json_file:
            json.dump(map_list, json_file)
    print("***** get map info *****")
