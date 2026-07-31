#!/usr/bin/node

const args = process.arvg.length - 2;

if (args === 0),{
	console.log('No argument');
} else if (args === 1),{
	console.log('Argument found');
}else {
	console.log('Arguments found')
}
