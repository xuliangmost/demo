---
name: update-modules-skill
description: 按项目规范更新已有表的字段。包含迁移（addColumn/changeColumn/removeColumn/addIndex/removeIndex）与对应 Sequelize 模型的同步修改。在用户提出更新表字段、改表结构、加字段、删字段、修改字段类型时使用。
---

# 更新表字段开发规范

在 **更新已有表结构** 时按本规范完成：先收集变更项，再写迁移并同步修改对应 Model。表已存在故无需改 ORM 注册或路由。

## 触发条件

- 用户说「更新表字段」「改表结构」「加字段」「删字段」「修改字段类型」「给某表加一列」等
- 需求明确为「修改已有数据表结构」

## 信息收集

### 用户未完整给出变更时索要

- **表名**：要修改的表（英文复数，如 `records`），对应 `src/modules/<模块名>/`
- **变更列表**，每项需明确：
  - **新增字段**：字段名、类型、是否必填（allowNull）、注释、默认值（可选）、是否建索引（可选）
  - **修改字段**：字段名、新类型 / 新 allowNull / 新 comment / 新 defaultValue（至少一项）
  - **删除字段**：字段名
  - **新增索引**：表名、字段名（或字段列表）、索引名（可选，默认 `idx_<表名>_<字段名>`）
  - **删除索引**：索引名

索要示例：

> 请提供：1）表名；2）变更类型与明细（新增/修改/删除字段，或增删索引，及对应字段名、类型、是否必填等）。

## 实施步骤

### 1. 创建迁移文件

- 路径：`migrations/YYYYMMDDHHMMSS-<简短描述>-<表名>.js`，如 `20260228120000-add-status-to-records.js`
- 使用 `queryInterface`：
  - 新增字段：`addColumn('<表名>', '<字段名>', { type, allowNull, comment, defaultValue })`
  - 修改字段：`changeColumn('<表名>', '<字段名>', { type, allowNull, comment, defaultValue })`
  - 删除字段：`removeColumn('<表名>', '<字段名>')`
  - 新增索引：`addIndex('<表名>', ['字段名'], { name: 'idx_<表名>_<字段名>' })`
  - 删除索引：`removeIndex('<表名>', 'idx_xxx')`
- **必须实现 down**：down 中按相反顺序回滚（removeColumn ↔ addColumn，removeIndex ↔ addIndex，changeColumn 改回原定义）
- 类型与 [reference.md](reference.md) 及 add-modules-skill 的 reference 一致

### 2. 同步修改 Model

- 文件：`src/modules/<模块名>/index.ts`（与表名对应的模块）
- **新增字段**：在类中增加 `@Column({ type: DataType.xxx, allowNull, comment }) declare <字段名>: 类型;`
- **修改字段**：修改该字段的 `@Column` 与 `declare` 类型，与迁移一致
- **删除字段**：删除该字段的 `@Column` 与 `declare` 声明
- 不修改 `@Table`、主键、`createdAt`/`updatedAt`；仅改业务字段

### 3. 不改动项

- **无需**修改 `src/database/sequelize.ts`（模块已注册）
- **无需**修改 router，除非业务要为新字段提供新接口

## 检查清单

- [ ] 迁移文件命名清晰，up/down 成对、可回滚
- [ ] Model 与迁移的字段、类型、allowNull、comment 一致
- [ ] 未改动 ORM 注册与路由（除非另有需求）

## 参考

- 字段类型：见 [reference.md](reference.md)，与 add-modules-skill 的 reference 一致
- 迁移 API 与示例：见 [reference.md](reference.md)
