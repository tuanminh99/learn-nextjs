import { z } from "zod";

console.log(process.env.NEXT_PUBLIC_ENDPOINT);


const configSchema = z.object({
    NEXT_PUBLIC_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT
})

if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

const envConfig = configProject.data

export default envConfig
