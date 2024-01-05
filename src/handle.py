# 读取interview文件夹下的所有文件 获取所有的png/jpg文件

import os

from urllib.parse import unquote


# 递归获取所有png文件 如果图片文件名是url编码的 则解码  需要递归才能获取所有的图片
def get_all_png_files(path):
    files = os.listdir(path)
    for file in files:
        if os.path.isdir(path + '/' + file):
            get_all_png_files(path + '/' + file)
        else:
            if file.endswith('.png') or file.endswith('.jpg') or file.endswith('.gif'):
                print(file)
                # 如果该图片名称是url编码的 则解码 并保存
                if '%' in file:
                    # url解码
                    os.rename(path + '/' + file, path + '/' + unquote(file))


get_all_png_files('src/interview')
