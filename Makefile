run:
	# run the project in development mode
	yarn start

setup:
	# Install all the dependencies
	yarn

build:
	# Build an production ready code
	yarn build

test:
	# Run the tests and notify when it's done
	yarn test --watch --notify

test-e2e: build
	yarn test-e2e

lint:
	# Run lint tasks with autofix
	yarn lint

# Build + deploy code to now.sh
deploy: build
	now public

