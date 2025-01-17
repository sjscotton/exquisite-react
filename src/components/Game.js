import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: "",
      finalPoem: [],
      complete: false,
      fields: FIELDS
    }
  }


  addNewVerse = (verse) => {
    this.setState({
      recentSubmission: verse,
      finalPoem: [...this.state.finalPoem, verse]
    });

  }

  finalizePoem = () => {
    this.setState({
      complete: true
    })
  }
  render() {

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">

        </p>

        <RecentSubmission gameComplete={this.state.complete} verse={this.state.recentSubmission} />

        <PlayerSubmissionForm gameComplete={this.state.complete} addNewVerseCallback={this.addNewVerse} fields={FIELDS} />

        <FinalPoem gameComplete={this.state.complete} verses={this.state.finalPoem} finalizePoemCallback={this.finalizePoem} />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
