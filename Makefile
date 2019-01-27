run:
	yarn start

setup:
	yarn

build:
	yarn build

test:
	yarn test --watch --notify

lint:
	yarn lint

deploy: build
	now public

