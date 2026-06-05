import { model } from "@medusajs/framework/utils"

const Seller = model.define("seller", {
  id: model.id().primaryKey(),
  name: model.text(),
  bio: model.text().nullable(),
  avatar_url: model.text().nullable(),
  store_slug: model.text().unique(),
  stripe_account_id: model.text().nullable(),
  commission_rate: model.bigNumber().default(0.1),
  is_approved: model.boolean().default(false),
})

export default Seller
