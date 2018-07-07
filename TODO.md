# TODO

- [X] Use Socket.io rooms so this project can be hosted and visitors can test it out 
- [ ] Include a video of this project in action
- [ ] Write tests
- [ ] End user calibration (and recalibration)
- [ ] Allow more than 1 controller to connect
- [ ] Check whether the user is on Chrome and tell them to use Chrome if they're not using Chrome
- [ ] Fork an exising mario-like game and implement 3D controllers so there's a cool demo
- [ ] Make the client side a Progressive Web App (PWA)

## Limitations

- If the project was hosted, in its current state, then only one person would be able to use it. Attempting to use multiple controllers will interfere with each other.
- User must be standing in the same position for the cursor to work consistently. If the user walks several steps away from their initial position then the cursor will either not follow or poorly follow where the user is pointing.