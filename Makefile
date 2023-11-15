.PHONY: start-storybook
start-storybook:
	@echo "Starting Build..." \
	&& npm run build \
	&& cd storybook \
	&& echo "Starting remove node_modules..." \
	&& rm -rf node_modules \
	&& rm yarn.lock \
	&& echo "Starting install node_modules..." \
	&& yarn \
	&& echo "Starting storybook..." \
	&& yarn storybook
	