# encoding=utf-8
import numpy as np
from algorithm.utils import db


def getTestData(): #测试查询
    results=db.selectRecordList()
    print(results)
    return results