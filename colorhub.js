/*
 $$$$$$\   $$$$$$\  $$\       $$$$$$\  $$$$$$$\        $$\   $$\ $$\   $$\ $$$$$$$\  
$$  __$$\ $$  __$$\ $$ |     $$  __$$\ $$  __$$\       $$ |  $$ |$$ |  $$ |$$  __$$\ 
$$ /  \__|$$ /  $$ |$$ |     $$ /  $$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |
$$ |      $$ |  $$ |$$ |     $$ |  $$ |$$$$$$$  |      $$$$$$$$ |$$ |  $$ |$$$$$$$\ |
$$ |      $$ |  $$ |$$ |     $$ |  $$ |$$  __$$<       $$  __$$ |$$ |  $$ |$$  __$$\ 
$$ |  $$\ $$ |  $$ |$$ |     $$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |
\$$$$$$  | $$$$$$  |$$$$$$$$\ $$$$$$  |$$ |  $$ |      $$ |  $$ |\$$$$$$  |$$$$$$$  |
 \______/  \______/ \________|\______/ \__|  \__|      \__|  \__| \______/ \_______/ 
 
>>> Version V 1.0


By Rick and Spen

INSTRUCTIONS:
1. Copy the entire code
2. Navigate to the website the code will be effective for
3. Go to Inspect Element using shortcut (Ctrl + Shift + I) (Cmd + Shift + I), or right click -> inspect
4. Navigate to the console tab
5. Paste the copied code and press enter
6. Enjoy!

VERSION UPDATE INFORMATION
V. 1.0:
- Launched Color Hub with 5 commands
																					 
*/



var brightness = 1;
var contrast = 1;
var huerotate = 1;
var grayscale = 0;

// Filters Function

function filter() {
	document.body.style = "filter: grayscale(" + grayscale + ") brightness(" + brightness + ")";
}



var rainbow = (instance) => {
    if (!instance.colors) {
        instance.colors = ["fc0303", "45f52a", "2a7bf5", "2af5e4", "c92af5", "f5dd2a", "66655d"];
    }
    if (!instance.pause) {
        instance.pause = 1000;
    }
    if (instance.transit !== false) {
        instance.target.style.transition = "color ease 0.5s";
    }
    instance.now = -1;

    instance.timer = setInterval(() => {
        instance.now++;
        if (instance.now >= instance.colors.length) {
            instance.now = 0;
        }
        instance.target.style.color = "#" + instance.colors[instance.now];
    }, instance.pause);
};

var $ = function (id) {
    return document.getElementById(id);
};




// Prompt for commands

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.key == "/") {
        userinput = prompt("Enter Command: ");
        if (userinput == "changetxtcolor") {
            colorinput = prompt("Enter Color");
            if (colorinput == "rainbow") {
                rainbow({
                    target: document.getElementById("txt"),
                });
            } else {
                document.getElementById("txt").style.color = colorinput;
            }
        } else if (userinput == "bc") {
            addbrightness = prompt("Enter the amount of light you wish to add (or enter a negative number to subtract)");
            brightness += addbrightness;
            filter()
        } else if (userinput == "b") {
            brightness += 0.2;
            filter()
        } else if (userinput == "bb") {
            brightness -= 0.2;
			if (brightness < 0) {
				brightness = 0;
			}
            filter()
        } else if (userinput == "g") {
			grayscale = 1
			filter()
		} else if (userinput == "gg") {
			grayscale = 0
			filter()
		}
    }
};



/*

LIST OF EXISTING COMMANDS FOR REFERENCE

b > brightness up 0.2
bb > brightness down 0.2
bc > brightness custom add/subtract amount
g > grayscale on
gg > grayscale off
changetxtcolor > change whole page to a text color of your choice

FUNCTIONS TO IMPLEMENT IN FUTURE VERSIONS

bset > set brightness
partymode > party mode
ss > Screen shade - shades the screen a certain color
c > contrast up
cc > contrast down
cset > set contrast
ccc > contrast custom add/subtract

*/
