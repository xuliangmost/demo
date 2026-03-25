---
name: add-modules-skill
description: 按 record 模块规范新增数据表与 ORM 模块。包含默认字段推断、自定义字段索要、迁移文件、Sequelize 模型与路由注册。在用户提出新增表、加新模块、新建数据表时使用。
---

# 新增表/模块开发规范

参考项目内 `record` 模块实现，在 **新增表** 时按本规范完成：默认字段自行推断，自定义字段若用户未提供则向用户索要，新增后必须注册到 ORM 与路由。

## 触发条件

- 用户说「新增表」「加一张表」「新建模块」「加一个 record 类似的表」等
- 需求明确为「新增数据表」或「新增业务模块（含表）」

## 信息收集

### 默认字段（自行推断，无需用户提供）

以下字段按约定自动添加，不在「自定义字段」中向用户索要：

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | INTEGER | 主键，自增，非空 |
| `createdAt` | DATE | 创建时间，非空 |
| `updatedAt` | DATE | 更新时间，非空 |

### 自定义字段（用户未提供时索要）

若用户**未完整给出**表结构或字段列表，需向用户索要：

- **表名**：英文、复数形式（如 `records`），用于表名与路由前缀
- **业务字段**：每个字段需包含
  - 字段名（英文）
  - 类型（STRING / TEXT / INTEGER / DATE / BOOLEAN / DECIMAL 等）
  - 是否必填（allowNull）
  - 注释（comment，可选）
  - 默认值（defaultValue，可选）
  - 是否需要索引（可选）

索要时可一次性问清，例如：

> 请提供：1）表名（英文复数）；2）业务字段列表（字段名、类型、是否必填、注释、默认值、是否建索引）。

## 实施步骤

### 1. 创建迁移文件

- 路径：`migrations/YYYYMMDDHHMMSS-create-<表名复数>.js`
- 使用 `sequelize-cli` 迁移格式，`up` 中 `createTable`，`down` 中 `dropTable`
- 表结构须包含：默认字段（id、createdAt、updatedAt）+ 用户提供的业务字段
- 类型与 [reference.md](reference.md) 中 Sequelize 类型一致；需索引的字段在 `up` 末尾用 `addIndex`

### 2. 创建模块目录与模型

- 目录：`src/modules/<模块名>/`
- 模型文件：`src/modules/<模块名>/index.ts`
  - 使用 `sequelize-typescript`：`@Table`、`@Column`、`@PrimaryKey`、`@AutoIncrement`、`DataType`
  - `@Table({ tableName: "<表名>", timestamps: true })`，以自动带出 `createdAt`/`updatedAt`
  - 声明与迁移一致的字段（含默认字段与业务字段）

### 3. 注册到 ORM

- 文件：`src/database/sequelize.ts`
- 在 `models` 数组中 **新增** 该模块的导入与引用，例如：`import XxxModule from "../modules/xxx";` 且 `models: [..., XxxModule]`

### 4. 创建 Service 与 Router（按需）

- 若需 API：在 `src/modules/<模块名>/service.ts` 中封装业务方法；在 `src/router/` 下新增 `<模块名>-router.ts`，并在 `src/router/index.ts` 中挂载，例如：`router.use('/api/<模块名>', xxxRouter.routes(), xxxRouter.allowedMethods());`

## 检查清单

- [ ] 迁移文件命名与表名一致，含默认字段与业务字段
- [ ] Model 与迁移字段、类型、allowNull、comment 一致
- [ ] `src/database/sequelize.ts` 的 `models` 中已注册新模块
- [ ] 若需接口：router 已创建并在 `router/index.ts` 挂载

## 参考

- 项目内参考实现：`src/modules/record/`、`migrations/20260211000001-create-records.js`
- 字段类型与迁移写法详见 [reference.md](reference.md)
