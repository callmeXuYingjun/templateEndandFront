# annoRecEnd
如果不使用websocket:
conda activate python37  
图数据库启动：neo4j console
python manage.py runserver  

如果使用websocket（需要下载Uvicorn服务）:
uvicorn WORK3.asgi:application

python manage.py makemigrations algorithm
python manage.py migrate


解决：django.db.utils.OperationalError: (1050, "Table '表名' already exists）错误信息
python manage.py migrate algorithm --fake


解决：django.db.utils.OperationalError: (1060, "Duplicate column name 'XXX')
1. python manage.py inspectdb
<!-- python manage.py inspectdb 数据库中你想用的表格的名字 > models.py 这样会生成一个新的文件和manage.py同级目录 -->
2. python manage.py inspectdb > models.py  
   将models.py内新增的表结构复制在子文件夹下的models.py

3. python manage.py makemigrations algorithm
4. 在django的migrations目录下，在新生成的记录中，找到新建字段的语句，将其复制到前一个记录里面
5. 然后将后面(新生成文件)含有新建字段的记录删除。
6. python manage.py migrate


更新数据表流程
1. 删除0001_initial.py
2. python manage.py inspectdb 
3. python manage.py inspectdb > models.py  将models.py内新增的表结构复制在子文件夹下的models.py （复制内容而不是文件，不然因为编码问题报错）
4. python manage.py makemigrations algorithm
5. python manage.py migrate

## 后端问题/任务：
TF-IDF