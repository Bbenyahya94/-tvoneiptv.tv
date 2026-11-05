# Deploying on Coolify

1. Push this project to a Git repository, then create a new **Docker Compose** resource in Coolify.
2. Select the repository and branch, with `/` as the base directory and `docker-compose.yml` as the compose file.
3. Set the service's public port to `80`, add your domain (for example `tvoneiptv.com`), then deploy.
4. Configure your DNS record to point to the Coolify server. Coolify will provision HTTPS after DNS resolves.

No environment variables, database, or persistent volume are required. The site is a static Nginx container.
