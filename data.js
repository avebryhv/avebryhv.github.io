//Flag Variables
var state1A = 0;
var keyNurse = false;
var keyStorage = false;
var keyTorch = false;
var keyPower = false;
var paperNurse = false;
var paperStorage = false;
var paper1A = false;
var paperPower = false;
var paperCount = 0;
var playerName = "";
//Audio Variables
var bgm = new Audio("sounds/bgm.wav");
var bgm2 = new Audio("sounds/bgm2.wav");
var wind = new Audio("sounds/wind.wav");
var pickup = new Audio("sounds/pickup.wav");
var paper = new Audio("sounds/paper.wav");
var pianoBad = new Audio("sounds/pianoBad.wav");
var chalk = new Audio("sounds/chalk.wav");
var scrape = new Audio("sounds/scrape.wav");
var generator = new Audio("sounds/generator.wav");
var staticSound = new Audio("sounds/static.mp3");
var glitch = new Audio("sounds/glitch.wav");



var roomArray = [
	{
		title:'???',
		text:'You wake up in the dark, lying on what seems to be a hard surface. The air around you feels completely still, and the room is in complete silence. The back of your head feels faintly sore, as if you had hit it some time ago, but otherwise you seem fine.',
		choices:[
			{
				text:'Investigate your surroundings',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'As your eyes adjust to the darkness of the room, the surface you woke up on is revealed to be a wooden table. Investigating the room reveals it to be an empty classroom, full of tables and chairs pointing towards the teacher’s desk and blackboard at the front of the room. You can also see a cupboard in one corner of the room, and a door that looks to lead out into a corridor.',
		choices:[
			{
				text:'Investigate the tables and chairs',
				index:2
			},
			{
				text:'Search the cupboard',
				index:3
			},
			{
				text:"Search the teacher's desk",
				index:5
			},
			{
				text:"Go through the door",
				index:6
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'Judging by the size of the chairs and tables with the room, it appears to belong to a primary school. You can see that they are fairly old, but have been kept in mostly good shape.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'You go over to the cupboard and attempt to open it, but find it to be locked. Further investigation shows that there is a small keyhole on one of the doors.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'You insert the small key into the cupboard, finding it to be a perfect fit.',
		choices:[
			{
				text:'Open the cupboard',
				index:21
			},
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'Searching the desk, you find stacks of teaching materials and homework hand-ins for various subjects. However, nothing here stands out as being any use to you.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Lower Corridor A',
		text:'You enter the darkly-lit corridor connecting classrooms together. Windows facing the outside of the school are all nailed shut with wooden planks, with the exception of one, which you notice has a few planks missing. Each classroom appears to be labelled, with the room you woke in being ‘1B’. From here, you should be able to enter rooms ‘1A’, ‘1B’ and ‘1C’, or proceed further down the corridor.',
		choices:[
			{
				text:'Enter Room 1A',
				index:7
			},
			{
				text:'Enter Room 1B',
				index:1
			},
			{
				text:'Enter Room 1C',
				index:13
			},
			{
				text:'Examine the window',
				index:30
			},
			{
				text:'Proceed further',
				index:14
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'You enter the classroom marked ‘1A’. The layout of this room looks to be almost identical to the room you woke up in, however you notice this room does not have a cupboard, and generally seems to be in a worse condition, with some of the desks having been smashed.',
		choices:[
			{
				text:'Examine the furniture',
				index:8
			},
			{
				text:'Investigate the windows',
				index:9
			},
			{
				text:"Search the teacher's desk",
				index:10
			},
			{
				text:"Return to corridor",
				index:6
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'The tables and chairs in this room appear to be from a primary school. Closer inspection reveals a bloodstain under one of the smashed desks.',
		choices:[
			{
				text:'Return to Room',
				index:7
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'The windows in this room all appear sealed shut with wooden planks. No light shines through, and there are no other visible sources of light in the room, however this and the other rooms remain dimly lit.',
		choices:[
			{
				text:'Return to Room',
				index:7
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'Investigating the teacher’s desk, you find a key lying on top of a registration sheet. The key is labelled ‘Nurse’s Office’. Upon picking up the key, you start to hear a scratching sound coming from the blackboard behind you.',
		choices:[
			{
				text:'Check the blackboard',
				index:11
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'You turn to face the blackboard, to see that the word ‘LEAVE’ is being scratched into the board.',
		choices:[
			{
				text:'Leave the room directly',
				index:6
			},
			{
				text:'Return to Room',
				index:12
			}
		]
	},
	{
		title:'Classroom 1A',
		text:'You turn away from the blackboard and continue to investigate the room. As you do, the space around you seems to violently distort, and you find yourself in a pitch-black space, looking directly at what appears to be the ghost of a young girl. The girl seems familiar to you somehow, but you are unable to identify either who she is or the connection between you. As you think about this, the space starts to turn red, and you can feel the back of your head bleeding rapidly. The last thing you see before you pass out is the figure of the ghost blankly staring at you. GAME OVER',
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:'Classroom 1C',
		text:'You enter the classroom labelled ‘1C’. This room has the tables and chair piled around the edges of the room, leaving the centre empty, where you notice some kind of marking on the floor.',
		choices:[
			{
				text:'Examine the floor',
				index:33
			},
			{
				text:'Return to Corridor',
				index:6
			}
		]
	},
	{
		title:'Lower Corridor B',
		text:'You arrive in a connecting corridor. This one contains rooms marked ‘Nurse’s Office’ and ‘Power Room’. There are also a set of stairs that appear to lead to a second floor. At the end of the corridor, you see a pair of large doors that look like they could be the entrance to the school. However, these doors are locked tight by some kind of force.',
		choices:[
			{
				text:"Enter Nurse's Room",
				index:15
			},
			{
				text:'Enter Power Room',
				index:51
			},
			{
				text:'Head Upstairs',
				index:24
			},
			{
				text:'Go back to the classrooms',
				index:6
			}
		]
	},
	{
		title:"Nurse's Room",
		text:'You enter the room marked ‘Nurse’s Room’. The first thing that catches your eye is what appears to be a bed, hidden by a curtain, in the far corner of the room. You can also see a desk, presumably belonging to the nurse, and a cupboard.',
		choices:[
			{
				text:"Investigate the bed",
				index:16
			},
			{
				text:'Search the desk',
				index:18
			},
			{
				text:'Search the cupboard',
				index:20
			},
			{
				text:'Return to Corridor',
				index:14
			}
		]
	},
	{
		title:"Nurse's Room",
		text:'Approaching the bed, you notice the the curtains are stained with a red fluid, presumably dried blood. Now that you can see the bed properly, there appears to be something in the bed, roughly the height of a child but much too thin to be one. Without opening the curtain, there is no way to identify the bed’s contents.',
		choices:[
			{
				text:'Open the curtain',
				index:17
			},
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room",
		text:'Opening the curtain, you find with some relief that the bed was not holding a person. Instead, you find a long, solid metal tube, with one end of it stained just like the curtain. Upon seeing this, you feel that your light headache has become slightly worse.',
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room",
		text:'You search the desk, skimming through the stored medical records. Underneath one entry, you find a small key.',
		choices:[
			{
				text:"Continue Searching",
				index:19
			},
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room",
		text:"You carry on searching through the nurse's desk, eventually coming across what seems to be a ripped-out diary entry. The paper is in rough condition, causing many of the words to be completely unidentifiable.",
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room",
		text:"The cupboard is locked",
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Storage Room",
		text:"The cupboard opens up to reveal a small storage room. Cardboard boxes and school supplies are piled around the corners of the room, with cut and ripped paper clippings scattered across the floor.",
		choices:[
			{
				text:'Search cardboard boxes',
				index:22
			},
			{
				text:'Investigate paper clippings',
				index:25
			},
			{
				text:'Return to the classroom',
				index:1
			}
		]
	},
	{
		title:"Storage Room",
		text:"You dig through the cardboard boxes that fill the room. As you search, your headache appears to get worse with every box you clear. Eventually, you come across a working battery-powered torch.",
		choices:[
			{
				text:'Continue Searching',
				index:23
			},
			{
				text:'Return to Room',
				index:21
			}
		]
	},
	{
		title:"Storage Room",
		text:"You continue to search through the boxes, while attempting to ignore the fact that the back of your head is becoming unbearably painful. You come to the last box, opening it up to find a small, rusted knife. As soon as you see the knife, you feel the slightest bit of satisfaction before passing out. GAME OVER",
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:"Upper Stairway",
		text:"You head upstairs, noticing that the corridor is getting darker as you ascend. When you reach the top of the stairs, the room ahead is pitch-black. Without any way to light the room, you decide that travelling any further would be too dangerous.",
		choices:[
			{
				text:'Return downstairs',
				index:14
			}
		]
	},
	{
		title:"Storage Room",
		text:"Searching through the scattered paper cuttings on the floor, you find one sheet that stands out in particular. This sheet is stained red, stuck to the floor, and marked with ‘CBGEA’.",
		choices:[
			{
				text:'Return to Room',
				index:21
			}
		]
	},
	{
		title:"Upper Stairway",
		text:"You arrive in a pitch black room - lit only by your torch. Looking around you can see two doors, marked ‘Art Room’ and ‘Music Room’. In a corner, you can see a large key floating close to the ground.",
		choices:[
			{
				text:"Enter Art Room",
				index:32
			},
			{
				text:"Enter Music Room",
				index:29
			},
			{
				text:"Investigate key",
				index:27
			},
			{
				text:'Go downstairs',
				index:14
			}
		]
	},
	{
		title:"Upper Stairway",
		text:"Approaching the floating key, you start to see that it is held in place by a see-through figure of a child huddled in the corner, facing away from you.",
		choices:[
			{
				text:"Approach the figure",
				index:28
			},
			{
				text:'Return to Room',
				index:26
			}
		]
	},
	{
		title:"???",
		text:"Determined to grab the key, you reach out towards the figure, only to feel the sensation of falling forwards as your vision blacks out. When you come to, you find yourself in a dark, enclosed space, slowly bleeding out from the back of your head to the sound of a power generator humming. GAME OVER",
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:"Upper Stairway",
		text:"Attempting to open the door to the music room, you find it to be blocked from the other side.",
		choices:[
			{
				text:'Return to Room',
				index:26
			}
		]
	},
	{
		title:"Lower Corridor A",
		text:"You approach the window with a few planks missing. Upon investigation, the remaining planks and area around the window are heavily scratched, as if there was an attempt to remove them with some kind of tool. Looking through the window, you can clearly see that you are in a relatively small, old-fashioned school building in the shape of a ‘U’. You cannot any kind of ground outside the window, however you are clearly on the lowest floor.",
		choices:[
			{
				text:"Examine further",
				index:31
			},
			{
				text:'Return',
				index:6
			}
		]
	},
	{
		title:"Lower Corridor A",
		text:"Based on other windows you can see, the building you are in appears to have three floors. Nearly all of the windows are similarly boarded up, but you can see another window on the second floor is in a similar state to this one. Nothing about the building particularly stands out, and although you can identify it to be a school, you cannot see any indication of the school’s name.",
		choices:[
			{
				text:'Return',
				index:6
			}
		]
	},
	{
		title:"Art Room",
		text:"You enter the door to the art room. Inside are rows of painting easels circling a statue in the centre of the room. In a corner of the room, you spot some kind of object covered by a sheet. At first inspection, it appears there are no doors other than the one leading back to the stairway.",
		choices:[
			{
				text:"Examine Easels",
				index:34
			},
			{
				text:"Examine Statue",
				index:35
			},
			{
				text:"Examine Covered Object",
				index:37
			},
			{
				text:'Return to stairway',
				index:24
			}
		]
	},
	{
		title:"Classroom 1C",
		text:"Upon closer inspection, what appears to be a rough map of the school has been marked on the floor in chalk.",
		choices:[
			{
				text:'Return',
				index:13
			}
		]
	},
	{
		title:"Art Room",
		text:"You circle the statue, taking a look at the easels. Most of them you find either empty, or holding an in-progress drawing of the statue. One you find smashed, and another seems to have been just worked on, as the paint is still wet.",
		choices:[
			{
				text:'Return to Room',
				index:32
			}
		]
	},
	{
		title:"Art Room",
		text:"You move over to the statue and examine it in more detail. The statue itself seems fairly standard, like any other statue you could find in an art room, however you notice the statue has heavy scratching from the neck up, with part of the head scratched away completely to reveal a button.",
		choices:[
			{
				text:"Press the button",
				index:36
			},
			{
				text:'Return to Room',
				index:32
			}
		]
	},
	{
		title:"Art Room",
		text:"Pressing the button, you hear a scraping sound, and look around to see part of the wall sliding to the side to reveal what appears to be another storage room. ",
		choices:[
			{
				text:"Enter the storage room",
				index:39
			},
			{
				text:'Return to Room',
				index:32
			}
		]
	},
	{
		title:"Art Room",
		text:"You approach the object covered by a white sheet, which seems to be roughly the same height as you. Now that you are close, you notice that there is a liquid dripping slowly from underneath the sheet, forming a dark pool at the object’s base. As you get closer, the back of your head seems to feel worse.",
		choices:[
			{
				text:"Uncover the object",
				index:38
			},
			{
				text:'Return to Room',
				index:32
			}
		]
	},
	{
		title:"Art Room",
		text:"As you pull the sheet off, you briefly find yourself staring into the eyes of a corpse, before you feel a heavy impact to the back of your head and black out. GAME OVER",
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:"Storage Room 2",
		text:"Entering the upper floor storage room, you notice shelves of art supplies and sealed boxes of other school supplies. You should be able to access either the music room or art room from here. Just like the lower floor storage room, the floor is littered with ripped sheets of paper.",
		choices:[
			{
				text:"Enter the Art Room",
				index:32
			},
			{
				text:"Enter the Music Room",
				index:40
			},
			{
				text:'Examine the papers',
				index:42
			}
		]
	},
	{
		title:"Music Room",
		text:"The music room is a long, open room of a similar size to the art room. Looking around the room, you can see various musical instruments lining the sides of the room, with a large piano in the centre. The boards on the window at the far end have been partially broken, and the broken-off planks used to board the door leading back to the stairway.",
		choices:[
			{
				text:"Look out the window",
				index:41
			},
			{
				text:"Examine the piano",
				index:43
			},
			{
				text:'Leave to the stairway',
				index:24
			},
			{
				text:"Go to storage room",
				index:39
			}
		]
	},
	{
		title:"Music Room",
		text:"Due to some of the wooden boards being broken off, you are able to look out of the window. However, you are still unable to determine where exactly you are, and it is too dark to see past the boundaries of the school. You start to turn away, but something on the lower floor catches your eye. Through the broken window, you can see a classroom door opening, and a tall figure walking in.",
		choices:[
			{
				text:'Return',
				index:40
			}
		]
	},
	{
		title:"Storage Room 2",
		text:"You take a look through the sheets of paper covering the floor. Most contain indecipherable text or scribblings, however one catches your eye as having been ripped out of a diary, although some of the words are obscured. ",
		choices:[
			{
				text:'Return',
				index:39
			}
		]
	},
	{
		title:"Music Room",
		text:"The large piano seems fairly old and well-used, however you can tell it has been kept in good condition. Just looking at the piano seems to give you the urge to sit down and play it.",
		choices:[
			{
				text:"Play the piano",
				index:44
			},
			{
				text:'Return to Room',
				index:40
			}
		]
	},
	{
		title:"Music Room",
		text:"You pull over a chair and press a key at random. As soon as you do, the ghost in the stairway, still holding a key, walks through the wall and over to you. The ghost stops on the other side of the piano, and then stares at you, as if expecting something.",
		choices:[
			{
				text:"Examine the ghost",
				index:45
			},
			{
				text:"Attempt to play",
				index:47
			},
			{
				text:'Return to Room',
				index:40
			}
		]
	},
	{
		title:"Music Room",
		text:"Now that the ghost is standing in front of you, you decide to take a good look at it. You can tell that the ghost is that of a young girl of primary school age, dressed in what you assume to be the uniform for the school. You get the impression that the ghost is of someone familiar to you, but you cannot pinpoint how you would recognise her. The ghost does not seem particularly hostile at the moment, so you think you should be able to leave the room safely if needed.",
		choices:[
			{
				text:"Attempt to talk to her",
				index:46
			},
			{
				text:'Return',
				index:44
			}
		]
	},
	{
		title:"Music Room",
		text:"You make an attempt to talk to the ghost, but you get no response. Instead, she just stares at the piano.",
		choices:[
			{
				text:'Return',
				index:44
			}
		]
	},
	{
		title:"Music Room",
		text:"You prepare to play the old piano. As you do, you notice the ghost’s expression get a little more intense, giving the impression you will only have one attempt at this. What tune will you play?",
		choices:[
			{
				text:"B-A-F-C-C",
				index:49
			},
			{
				text:"C-B-G-E-A",
				index:48
			},
			{
				text:'G-B-G-E-A',
				index:49
			},
			{
				text:"D-E-C-G-A",
				index:49
			},
			{
				text:"E-B-B-E-F",
				index:49
			}
		]
	},
	{
		title:"Music Room",
		text:"As you finish playing the tune, the ghost looks at you with a satisfied expression. She places the key she was carrying on top of the piano, then quickly leaves the room.",
		choices:[
			{
				text:'Return to Room',
				index:40
			}
		]
	},
	{
		title:"Music Room",
		text:"As you finish playing the tune, the ghost looks at you with a disappointed expression. The room around you suddenly distorts as you feel a stinging pain in the back of your head and pass out GAME OVER",
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:"Music Room",
		text:"Having already appeased the ghost, you decide not to play the piano any more.",
		choices:[
			{
				text:'Return to Room',
				index:40
			}
		]
	},
	{
		title:"Power Room",
		text:"You head towards the room marked ‘Power Room’, however find it to be locked with a heavy iron padlock.",
		choices:[
			{
				text:'Return',
				index:14
			}
		]
	},
	{
		title:"Power Room",
		text:"You unlock the Power Room and step inside. The most prominent feature of the room is a large switch, that appears to control the school’s power supply. The room is fairly small, with the only other notable feature being the cabinets full of various files lined up along the back wall.",
		choices:[
			{
				text:"Flip the power switch",
				index:54
			},
			{
				text:'Search the cabinets',
				index:53
			},
			{
				text:"Leave the room",
				index:14
			}
		]
	},
	{
		title:"Power Room",
		text:"You spend some time skimming through the files stored in the power room. Most of the files detail the workings of the school, and do not seem particularly relevant to you, however eventually you come across a sheet of paper that looks to have been torn from a diary.",
		choices:[
			{
				text:'Return',
				index:52
			}
		]
	},
	{
		title:"Power Room",
		text:"Placing your hands on the power switch, you get the feeling that you are about to do something that cannot be undone.",
		choices:[
			{
				text:"Flip the switch",
				index:60
			},
			{
				text:'Leave the switch alone',
				index:52
			}
		]
	},
	{
		title:"Room 1A?",
		text:"Entering room 1A again, the atmosphere is completely different to earlier. This time, everything in the room seems to be in good condition. The boards covering the windows have disappeared, allowing light to properly fill the room. Inside, you notice the faint shape of the figure you saw enter the room wandering around.",
		choices:[
			{
				text:"Examine the furniture",
				index:56
			},
			{
				text:'Examine the windows',
				index:57
			},
			{
				text:"Approach the figure",
				index:58
			},
			{
				text:"Leave the room",
				index:6
			}
		]
	},
	{
		title:"Room 1A?",
		text:"All of the desks and chairs seem to be in good condition, as if they were currently in use.",
		choices:[
			{
				text:'Return',
				index:55
			}
		]
	},
	{
		title:"Room 1A?",
		text:"Seeing a chance of escaping, you head over to one of the windows and attempt to open it, only to find the “window” was part of the wall itself, as if painted on. A quick check reveals all of the other windows to be the same.",
		choices:[
			{
				text:'Return',
				index:55
			}
		]
	},
	{
		title:"Room 1A?",
		text:"Looking at the figure, the only details you can make out is that it stands at an adult height. While you have been in the room, the figure has paid no attention to you, instead wandering around the room as if looking for something. As you approach the figure, it seems to get fainter, until it disappears completely, leaving a torn sheet of paper behind on one of the tables",
		choices:[
			{
				text:'Pick up the paper',
				index:59
			}
		]
	},
	{
		title:"Room 1A?",
		text:"You pick up what appears to be a torn-out diary entry, damaged to the point that some of the words are illegible. As you do, the space around you seems to distort, and you find yourself standing in the corridor outside.",
		choices:[
			{
				text:'Continue',
				index:6
			}
		]
	},
	{
		title:"Power Room",
		text:"As soon as you flip the power switch, the entire room fills with white light and the loud humming of the generator. From inside the power room, you can hear the large doors to the entrance slowly open. You quickly run out of the room and down the corridor, passing through the two large main doors, out to the dark exterior of the school. Looking back, you can see the young ghost staring at you from a window, before you run into the darkness away from the school. GOOD END",
		choices:[
			{
				text:'Play Again',
				index:0
			}
		]
	},
	{
		title:"Power Room",
		text:"As soon as you flip the power switch, the whole room completely blacks out, before slowly being filled with a dim red light. While the room is lighting up, you have a vision of a person, crouching in this room, taking a blow to the back of the head from a metal tube. Seeing this, the headache stops, and you remember why you came here. The humming of the generator reveals the power has been turned on, and you hear the main doors leading out of the building opening.",
		choices:[
			{
				text:'Leave the room',
				index:62
			}
		]
	},
	{
		title:"Lower Corridor B",
		text:"Walking out of the power room and towards the entrance, you find the ghost, blocking the path between you and the exit. Hoping she can understand, you explain to her why you came here. Although there is no response, it looks as if she can hear you.",
		choices:[
			{
				text:'Continue',
				index:63
			}
		]
	},
	{
		title:"Lower Corridor B",
		text:"You tell the ghost that, if you didn’t return from the investigation, you gave orders for the police to start arresting staff. Upon assuring her that her killer would be caught, the ghost smiles and starts to disappear. As she does, you notice the building around you start to evaporate, and your vision fading to white. TRUE END",
		choices:[
			{
				text:'Play Again',
				index:0
			}
		]
	},
	{
		title:"Upper Stairway",
		text:"You arrive in a pitch black room - lit only by your torch. Looking around you can see two doors, marked ‘Art Room’ and ‘Music Room’. ",
		choices:[
			{
				text:"Enter Art Room",
				index:32
			},
			{
				text:"Enter Music Room",
				index:40
			},
			{
				text:'Go downstairs',
				index:14
			}
		]
	},
]
