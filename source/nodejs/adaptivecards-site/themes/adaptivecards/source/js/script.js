// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
$(function () {
	// Adaptive Cards
	AdaptiveCards.AdaptiveCard.onExecuteAction = function (action) {
		var message = "Action executed\n";
		message += "    Title: " + action.title + "\n";

		if (action instanceof AdaptiveCards.OpenUrlAction) {
			message += "    Type: Action.OpenUrl\n";
			message += "    Url: " + action.url + "\n";
		} else if (action instanceof AdaptiveCards.SubmitAction) {
			message += "    Type: Action.Submit";
			message += "    Data: " + JSON.stringify(action.data);
		} else {
			message += "    Type: <unknown>";
		}

		alert(message);
	};



	var hostConfig = {
		"spacing": {
			"small": 3,
			"default": 8,
			"medium": 20,
			"large": 30,
			"extraLarge": 40,
			"padding": 10
		},
		"separator": {
			"lineThickness": 1,
			"lineColor": "#EEEEEE"
		},
		"supportsInteractivity": true,
		"fontTypes": {
			"default": {
				"fontFamily": "Segoe UI, Helvetica Neue, Helvetica, sans-serif",
				"fontSizes": {
					"small": 12,
					"default": 14,
					"medium": 17,
					"large": 21,
					"extraLarge": 26
				},
				"fontWeights": {
					"lighter": 200,
					"default": 400,
					"bolder": 600
				}
			},
			"monospace": {
				"fontFamily": "'Courier New', Courier, monospace",
				"fontSizes": {
					"small": 12,
					"default": 14,
					"medium": 17,
					"large": 21,
					"extraLarge": 26
				},
				"fontWeights": {
					"lighter": 200,
					"default": 400,
					"bolder": 600
				}
			}
		},
		"containerStyles": {
			"default": {
				"backgroundColor": "#FFFFFF",
				"foregroundColors": {
					"default": {
						"default": "#000000",
						"subtle": "#767676"
					},
					"accent": {
						"default": "#0063B1",
						"subtle": "#0063B1"
					},
					"attention": {
						"default": "#FF0000",
						"subtle": "#DDFF0000"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#c3ab23",
						"subtle": "#DDc3ab23"
					}
				}
			},
			"emphasis": {
				"backgroundColor": "#F0F0F0",
				"foregroundColors": {
					"default": {
						"default": "#000000",
						"subtle": "#767676"
					},
					"accent": {
						"default": "#2E89FC",
						"subtle": "#882E89FC"
					},
					"attention": {
						"default": "#FF0000",
						"subtle": "#DDFF0000"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#c3ab23",
						"subtle": "#DDc3ab23"
					}
				}
			},
			"accent": {
				"backgroundColor": "#C7DEF9",
				"foregroundColors": {
					"default": {
						"default": "#333333",
						"subtle": "#EE333333"
					},
					"dark": {
						"default": "#000000",
						"subtle": "#66000000"
					},
					"light": {
						"default": "#FFFFFF",
						"subtle": "#33000000"
					},
					"accent": {
						"default": "#2E89FC",
						"subtle": "#882E89FC"
					},
					"attention": {
						"default": "#cc3300",
						"subtle": "#DDcc3300"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#e69500",
						"subtle": "#DDe69500"
					}
				}
			},
			"good": {
				"backgroundColor": "#CCFFCC",
				"foregroundColors": {
					"default": {
						"default": "#333333",
						"subtle": "#EE333333"
					},
					"dark": {
						"default": "#000000",
						"subtle": "#66000000"
					},
					"light": {
						"default": "#FFFFFF",
						"subtle": "#33000000"
					},
					"accent": {
						"default": "#2E89FC",
						"subtle": "#882E89FC"
					},
					"attention": {
						"default": "#cc3300",
						"subtle": "#DDcc3300"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#e69500",
						"subtle": "#DDe69500"
					}
				}
			},
			"attention": {
				"backgroundColor": "#FFC5B2",
				"foregroundColors": {
					"default": {
						"default": "#333333",
						"subtle": "#EE333333"
					},
					"dark": {
						"default": "#000000",
						"subtle": "#66000000"
					},
					"light": {
						"default": "#FFFFFF",
						"subtle": "#33000000"
					},
					"accent": {
						"default": "#2E89FC",
						"subtle": "#882E89FC"
					},
					"attention": {
						"default": "#cc3300",
						"subtle": "#DDcc3300"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#e69500",
						"subtle": "#DDe69500"
					}
				}
			},
			"warning": {
				"backgroundColor": "#FFE2B2",
				"foregroundColors": {
					"default": {
						"default": "#333333",
						"subtle": "#EE333333"
					},
					"dark": {
						"default": "#000000",
						"subtle": "#66000000"
					},
					"light": {
						"default": "#FFFFFF",
						"subtle": "#33000000"
					},
					"accent": {
						"default": "#2E89FC",
						"subtle": "#882E89FC"
					},
					"attention": {
						"default": "#cc3300",
						"subtle": "#DDcc3300"
					},
					"good": {
						"default": "#54a254",
						"subtle": "#DD54a254"
					},
					"warning": {
						"default": "#e69500",
						"subtle": "#DDe69500"
					}
				}
			}
		},
		"imageSizes": {
			"small": 40,
			"medium": 80,
			"large": 160
		},
		"actions": {
			"maxActions": 100,
			"spacing": "default",
			"buttonSpacing": 8,
			"showCard": {
				"actionMode": "inline",
				"inlineTopMargin": 8
			},
			"actionsOrientation": "horizontal",
			"actionAlignment": "left"
		},
		"adaptiveCard": {
			"allowCustomStyle": false
		},
		"imageSet": {
			"imageSize": "medium",
			"maxImageHeight": 100
		},
		"factSet": {
			"title": {
				"color": "default",
				"size": "default",
				"isSubtle": false,
				"weight": "bolder",
				"wrap": true,
				"maxWidth": 150
			},
			"value": {
				"color": "default",
				"size": "default",
				"isSubtle": false,
				"weight": "default",
				"wrap": true
			},
			"spacing": 8
		}
	}

	$("#closeVideo").click(function () {
		$("#overviewVideo")[0].pause();
		$('#videoModal').css("display", "none");
	});

	$("#watchVideo").click(function () {
		$("#overviewVideo")[0].play();
		$('#videoModal').css("display", "block");

	});

	$(document).keyup(function (e) {
		if (e.keyCode === 27) $('#closeVideo').click();
	});

	// Loop videos 
	$("video").each(function () {
		var $video = $(this);
		var loopDelay = $video.attr("data-loop-delay");
		if (loopDelay) {
			$video.on("ended", function () {
				setTimeout(function () {
					$video[0].play();
				}, loopDelay);
			});
		}
	});

	
	$('.ac-properties table').addClass("w3-table w3-bordered");

	hljs.configure({
		tabReplace: '  '
	});

	hljs.initHighlightingOnLoad();

	// From https://github.com/30-seconds/30-seconds-of-code/blob/20e7d899f31ac3d8fb2b30b2e311acf9a1964fe8/snippets/copyToClipboard.md
	function copyToClipboard(str) {
		const el = document.createElement('textarea');
		el.value = str;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		const selected =
			document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		if (selected) {
			document.getSelection().removeAllRanges();
			document.getSelection().addRange(selected);
		}
	}


	$('.adaptivecard').each(function () {


		var cardUrl = $(this).attr("data-card-url");
		var el = $(this);
		if (cardUrl) {
			$.getJSON(cardUrl, function (json) { renderCard(el, json); });
		} else {
			renderCard($(this), el.text());
		}
	});

	function renderCard(el, json) {
		if (typeof json === "string")
			json = JSON.parse(json);

		// TODO: clean this up to only provide custom host config options
		// it breaks on any rename as-is
		var adaptiveCard = new AdaptiveCards.AdaptiveCard();
		adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(hostConfig);
		adaptiveCard.parse(json);
		var renderedCard = adaptiveCard.render();

		el.text('').append(renderedCard).show();
	}

	$("button.copy-code").click(function (e) {
		var content = $(this).parent().siblings("pre").text();
		copyToClipboard(content);
	});

	$("button.try-adaptivecard").click(function (e) {
		var $button = $(this);
		if($button.attr("data-designer-url")) {
			window.open($button.attr("data-designer-url"));
		}
		var cardUrl = $(this).parent().siblings("div.adaptivecard").attr("data-card-url");
		var isAbsolutelUri = new RegExp('^(?:[a-z]+:)?//', 'i');
		if (isAbsolutelUri.test(cardUrl) === false) {
			cardUrl = window.location.href + cardUrl;
		}
		window.open("/designer/index.html?card=" + encodeURIComponent(cardUrl));
	});

	$("#feedback-button").click(function (e) {
		e.preventDefault();
		window.open("https://github.com/Microsoft/AdaptiveCards/issues/new?title="
			+ encodeURIComponent("[Website] [Your feedback title here]")
			+ "&body=" + encodeURIComponent("\r\n\r\n[Your detailed feedback here]\r\n\r\n---\r\n* URL: "
				+ window.location.href));
	});


	$('#menu-nav').on('change', function () {
		window.location = this.value;
	});

	// Code for making sidebar sticky
	var headerHolder;
	var footerHolder;
	var sidebar = $(".sidebar");

	if (sidebar.length > 0) {
		headerHolder = $(".header-holder");
		footerHolder = $(".footer-holder");

		updateSidebarTopOffset();

		$(document).scroll(function () {
			updateSidebarTopOffset();
		});
	}

	function updateSidebarTopOffset() {
		var headerHeight = headerHolder.height();
		var footerHeight = footerHolder.height();
		var scrollOffset = $(document).scrollTop();
		var windowHeight = $(window).height();
		var footerPosition = footerHolder.offset().top;
		var hiddenAfter = (footerPosition + footerHeight) - (scrollOffset + windowHeight);

		var topPadding = 24;

		var calculatedTop = headerHeight - scrollOffset + topPadding;
		if (calculatedTop < topPadding) {
			calculatedTop = topPadding;
		}

		sidebar.css("top", calculatedTop).css("bottom", footerHeight - hiddenAfter);
	}
});