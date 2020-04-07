/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e8c3cd98763035aac7a90c1
*
* You will get 10% discount for each one of your friends
* 
*/
import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left,
  Header,
  Button,
  Body,
  Title
} from "native-base";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import DareActions from "../redux/actions/DareActions";

// END IMPORT ACTIONS

/** APIs

* actionsDare.list
*	@description CRUD ACTION list
*

**/

class DareList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.navigation.addListener("willFocus", async () => { 
      // Load list
      this.props.actionsDare.loadDareList();
    });
  }

  // Receive props
  componentWillReceiveProps(props) {
    this.setState({
      ...this.state,
      list: props.list
    });
  }

  deleteRow(secId, rowId, rowMap, data) {
    let that = this;
    this.props.actionsDare.deleteDare(data._id).then(() => {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = that.state.list;
      newData.splice(rowId, 1);
      that.setState({
        list: newData
      });
    });
  }

  render() { 
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Dare</Title>
          </Body>
          <Right>
            <Button
              transparent
              name="menu"
              onPress={() => this.props.navigation.navigate("DareEdit")}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => (
              <ListItem
                noIndent
                onPress={() =>
                  this.props.navigation.navigate("DareEdit", {
                    id: item._id
                  })
                }
              >
                <Left>
                  <Text>{item._id}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap, data)}
              >
                <Icon active name="trash" />
              </Button>
            )}
          />
          {this.state.list && this.state.list.length == 0 && (
            <List>
              <ListItem>
                <Text>No elements found</Text>
              </ListItem>
            </List>
          )}
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDare: bindActionCreators(DareActions, dispatch),
  };
};

// Validate types
DareList.propTypes = { 
  actionsDare: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DareListReducer.listDare
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DareList);