from algorithm.models import Test

Test=Test.objects

def selectRecordList():
    recordList=Test.values("id","name")
    return list(recordList)
