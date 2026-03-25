# 新增模块参考：字段类型与迁移

## 迁移中的 Sequelize 类型（queryInterface）

| 类型 | 写法 | 说明 |
|------|------|------|
| 整型主键自增 | `Sequelize.INTEGER` + `primaryKey: true, autoIncrement: true` | 用于 id |
| 字符串 | `Sequelize.STRING` | 短文本 |
| 长文本 | `Sequelize.TEXT('long')` | 大段文本 |
| 日期 | `Sequelize.DATE` | createdAt/updatedAt 及业务日期 |
| 布尔 | `Sequelize.BOOLEAN` | 可配 `defaultValue: true/false` |
| 小数 | `Sequelize.DECIMAL(10, 2)` | 按精度调整 |

每列建议包含：`type`、`allowNull`、`comment`（可选）、`defaultValue`（可选）。

## Model 中的 DataType（sequelize-typescript）

| 迁移类型 | Model 写法 |
|----------|------------|
| INTEGER | `DataType.INTEGER` |
| STRING | `DataType.STRING` |
| TEXT('long') | `DataType.TEXT('long')` |
| DATE | `DataType.DATE` |
| BOOLEAN | `DataType.BOOLEAN` |
| DECIMAL(10,2) | `DataType.DECIMAL(10, 2)` |

主键：`@PrimaryKey` + `@AutoIncrement` + `@Column(DataType.INTEGER)`；时间戳由 `@Table({ timestamps: true })` 自动生成声明。

## 迁移文件命名

- 格式：`YYYYMMDDHHMMSS-create-<表名>.js`，表名为复数（如 `records`）
- 示例：`20260211000001-create-records.js`

## 索引

在迁移 `up` 中表创建后添加：

```js
await queryInterface.addIndex('<表名>', ['字段名'], { name: 'idx_<表名>_<字段名>' });
```

## 目录与文件对应关系

| 内容 | 路径 |
|------|------|
| 迁移 | `migrations/YYYYMMDDHHMMSS-create-<表名>.js` |
| 模型 | `src/modules/<模块名>/index.ts` |
| 服务 | `src/modules/<模块名>/service.ts` |
| 路由 | `src/router/<模块名>-router.ts` |
| ORM 注册 | `src/database/sequelize.ts`（models 数组） |
| 路由挂载 | `src/router/index.ts` |
