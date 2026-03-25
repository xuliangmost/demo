# 更新表字段参考：迁移 API 与 Model 修改

## 迁移中的 queryInterface API

### 新增字段

```js
await queryInterface.addColumn('<表名>', '<字段名>', {
  type: Sequelize.STRING,      // 或 INTEGER, TEXT('long'), DATE, BOOLEAN, DECIMAL(10,2) 等
  allowNull: true,
  comment: '注释',
  defaultValue: null           // 可选
});
```

**down**：`await queryInterface.removeColumn('<表名>', '<字段名>');`

### 修改字段

```js
await queryInterface.changeColumn('<表名>', '<字段名>', {
  type: Sequelize.STRING,
  allowNull: false,
  comment: '新注释',
  defaultValue: null
});
```

**down**：再次 `changeColumn` 改回修改前的定义（需在迁移里保留旧定义用于 down）。

### 删除字段

```js
await queryInterface.removeColumn('<表名>', '<字段名>');
```

**down**：`await queryInterface.addColumn('<表名>', '<字段名>', { ... });` 用删除前的列定义。

### 新增索引

```js
await queryInterface.addIndex('<表名>', ['字段名'], { name: 'idx_<表名>_<字段名>' });
// 联合索引
await queryInterface.addIndex('<表名>', ['col1', 'col2'], { name: 'idx_<表名>_col1_col2' });
```

**down**：`await queryInterface.removeIndex('<表名>', 'idx_<表名>_<字段名>');`

### 删除索引

```js
await queryInterface.removeIndex('<表名>', '索引名');
```

**down**：`await queryInterface.addIndex(...)` 用删除前的索引定义。

## 迁移文件命名

- 格式：`YYYYMMDDHHMMSS-<简短描述>-<表名>.js`
- 示例：`20260228120000-add-status-to-records.js`、`20260228120100-drop-field10-from-records.js`

## Model 修改对照

| 迁移操作 | Model 操作 |
|----------|------------|
| addColumn | 在类中新增 `@Column(...) declare 字段名: 类型;` |
| changeColumn | 修改该字段的 `@Column` 选项与 `declare` 类型 |
| removeColumn | 删除该字段的 `@Column` 与 `declare` |
| addIndex / removeIndex | Model 无需改（索引不体现在 sequelize-typescript 装饰器里，迁移即可） |

类型与 add-modules-skill 的 reference 一致：`DataType.STRING`、`DataType.TEXT('long')`、`DataType.INTEGER`、`DataType.DATE`、`DataType.BOOLEAN`、`DataType.DECIMAL(10, 2)` 等。
