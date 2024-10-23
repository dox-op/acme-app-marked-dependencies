# load env
set -a
. .env
set +a

# setup
docker-compose up -d --wait postgres keycloak

# db
pnpm db:push
pnpm db:seed

# run
#pnpm run dev