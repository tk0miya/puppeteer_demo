all:
	@echo 'usage: make [screenshot | input_forms]'

.PHONY: screenshot
screenshot:
	docker run -i --init --rm --cap-add=SYS_ADMIN \
		--name puppeteer-chrome -v `pwd`:/mnt \
		puppeteer-chrome-linux \
		node -e "`cat screenshot.js`"
	open screenshot.png

.PHONY: input_forms
input_forms:
	docker run -i --init --rm --cap-add=SYS_ADMIN \
		--name puppeteer-chrome -v `pwd`:/mnt \
		puppeteer-chrome-linux \
		node -e "`cat input_forms.js`"
	open input_forms.png

.PHONY: hide_heroimage
hide_heroimage:
	docker run -i --init --rm --cap-add=SYS_ADMIN \
		--name puppeteer-chrome -v `pwd`:/mnt \
		puppeteer-chrome-linux \
		node -e "`cat hide_heroimage.js`"
	open hide_heroimage.png

.PHONY: card_titles
card_titles:
	docker run -i --init --rm --cap-add=SYS_ADMIN \
		--name puppeteer-chrome -v `pwd`:/mnt \
		puppeteer-chrome-linux \
		node -e "`cat card_titles.js`"
