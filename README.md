# KeystoneJS Blank Starter Template

You've created a KeystoneJS project! This project contains an AdminUI and GraphQL App.

You probably want to add Lists, Authentication, Access control and a front-end application.

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running the Keystone Admin UI is reachable via: `localhost:3000/admin`.

## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).

## Setting up battles schema stuff

Battle

- battle intro description
- mission
- armyInfo1
- armyInfo2
- battle summary
- photos

ArmyBattleInfo

- army link
- battle primary score
- secondary 1
- secondary 2
- secondary 3
- secondary 1 score
- secondary 2 score
- secondary 3 score

Army

- player
- faction
- name
- description
- (units)
- (points values)

## What works, what's in progress, what would be nice

- create and manage battle flow is in progress
- would be nice to have the mission rules fleshed out in a schema, and make selection use them
  - same with the actual factual secondaries data
- need to work on adding images to battles for batrep stuff
- all the css and UI improvements - have a bit of a poke on mobile
- need to sort out deploying
- I'd love to add ts-gql into the project properly
- Need to work on the battle index page
- look at the label fields for things to make better labels - in particular for `battle`, maybe for `army`
  - do we need another bit of data for armies such as date? Would allow label to be `a vs b (DD/MM/YY)`
- review of how the data is modeled now it's been in use. A lot of cumbersome names secondary1Score
  - shorten names? `sec1`/`sec1Num` kind of thing? Different format? `secondary: { name, score }`
    - the second really appeals but not sure how to do it within a keystone schema nicely
- you cannot end a buttle currently - fix that
- you cannot update point scores - fix that
- get phase 1 deployed without data polling, but prioritise it for phase 2
- no real plans to link units and models to armies right now - would be neat to be able to link a battlescribe file or something though
- add pregame notes as an interrim solution to things being kept in reserves

```js
const Battle = {
    army1: {
        primaryScore: 2,
        secondaries: [{
            name, score
        }]
    }
    army2: {
        ...
    }
}
```
