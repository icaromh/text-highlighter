run:
	yarn start

setup:
	yarn

build:
	yarn build

deploy: build
	now public
