# bulkWrite()
- 一次对数据库执行多个操作
# count()
```
Model.count(filter)
```
- 建议废弃
# countDocuments()
```
Model.count(filter)
```
- 返回相应documents的数量
- filter为{}将不通过索引(estimatedDocumentCount代替)
