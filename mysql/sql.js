// CREATE DATABASE dbname 创建数据库
// DROP DATABASE dbname 删除数据库
// USE dbname 使用数据库

// CREATE TABLE tablename(col1 type1, col2 type2) 创建数据表， NOT NULL为非空字段,AUTO_INCREMENT数值自动加一,PRIMARY KEY设置主键
// CREATE TABLE IF NOT EXISTS `tablename`(
//     id INT UNSIGNED AUTO_INCREMENT,
//     id2 INT UNSIGNED AUTO_INCREMENT,
//     title VARCHAR(100) NOT NULL,
//     runoob_author VARCHAR(40) NOT NULL,
//     submission_date DATE,
//     PRIMARY KEY (id, id2)
//  )ENGINE=InnoDB DEFAULT CHARSET=utf8;
// DROP TABLE tablename 删除数据表

// INSERT INTO tablename(col1, col2) VALUES(1, 2), (3, 4) 插入一条或多条数据
// SELECT col FROM tablemname
// WHERE 条件查询，SELECT,UPDATE,DELETE中
// UPDATE tablename SET field1=value1,field2=value2 更新一个或多个字段
// DELETE FROM tablename WHERE 删除表数据
// LIKE 与WHERE配合使用, %匹配任意个任意字符,_任意单个字符
// UNION 用于多个select的对应列合并去重(UNION ALL不去重)
// ORDER BY field1，field2 按照所给的字段排序,ASC升序默认，DESC降序
// GROUP BY HAVING 分组，COUNT,SUM,AVG,WITH ROLLUP分组后的和
// JOIN ON 连接 INNER JOIN等于JOIN等值连接,LEFT JOIN左连接,RIGHT JOIN右连接
// IS NULL 和 IS NOT NULL 不可用等号
// REGEXP regexp 正则表达式匹配
// TRANSACTION处理 BEGIN COMMIT
// ALTER TABLE tablename ADD col type 修改表DROP,MODIFY,CHANGE等
