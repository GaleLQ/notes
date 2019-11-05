// zadd key score member [score member] 添加
// zscore key member 查看成员的score
// zincrby key increment member 为成员的score增量
// zcard key 返回成员个数
// zcount key min max 返回score介于之间的成员数
// zrange key start stop [withscores] 返回score从小到大排序的索引位于之间的成员
// zrevrange key start stop [withscores] 如上,从大到小
// zrangebyscore key min max [withscores] [limit offset count] 返回score介于之间的成员,小到大
// zrevrangebyscore key max min [withscores] [limit offset count] 大到小
// zrank key member 返回按照score递增排的index
// zrevrank key member 递减
// zrem key member [member] 移除成员
// zremrangebyrank key start stop 移除索引在区间的成员
// zremrangebyrank key min max 移除score在区间的成员
// zrangebylex key min max [limit offset count] 所有成员相同score,返回字典序在索引之间的成员
// zlexcount key min max 相同score,返回之间的数量
// zremrangebylex key min max 相同score,移除之间的成员
// zunionstore dest numkeys key [key] [weights weight [weight]] [aggregate sum|min|max] 并集,weight乘法因子,聚合函数
// zinterstore dest numkeys key [key] [weights weight [weight]] [aggregate sum|min|max] 同上,交集