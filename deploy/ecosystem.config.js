module.exports = {
  apps: [
    {
      name: "cardvault-backend",
      cwd: "/var/www/cardvault/backend",
      script: "npx",
      args: "medusa start",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--max-old-space-size=2048",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      error_file: "/var/log/cardvault/backend-error.log",
      out_file: "/var/log/cardvault/backend-out.log",
      merge_logs: true,
    },
    {
      name: "cardvault-storefront",
      cwd: "/var/www/cardvault/storefront",
      script: "npx",
      args: "next start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      error_file: "/var/log/cardvault/storefront-error.log",
      out_file: "/var/log/cardvault/storefront-out.log",
      merge_logs: true,
    },
  ],
}
