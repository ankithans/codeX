# from pylint import lint
from pylint import epylint as lint
import tempfile
import os
import string 
import random

def createFile(source):
    res = ''.join(random.choices(string.ascii_lowercase, k = 5)) + ".py"
    f = open(res , "a")
    f.write(source)

    ROOT_DIR = os.path.abspath(os.curdir)
    path = ROOT_DIR + '/' + f.name
    return path

def deleteFile(name):
    os.remove(name)

def generate_warnings(source):
    path = createFile(source)

    (pylint_stdout, pylint_stderr) = lint.py_run(path, return_std=True)

    # print(pylint_stdout.read())
    deleteFile(path)
    return pylint_stdout.read()