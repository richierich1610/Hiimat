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
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
  Picker,
  DatePicker,
  Switch,
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

* actionsDare.get
*	@description CRUD ACTION get
*	@param Number id
*

**/


class DareEdit extends Component {
  
  // Init dare
  constructor(props) {
    super(props);
    this.state = {
      dare: {}
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsDare.loadDare(itemId);
        this.props.actionsDaringUser.findBydare(itemId);
      } else {
        this.setState({
          dare: {}
        });
      }
      
      this.props.actionsUser.loadUserList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      dare: {}
    });
    this.props.actionsDare.reset();
  }

  // Insert props dare in state
  componentWillReceiveProps(props) {
    this.setState({
      dare: props.dare
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    
    if (!this.state.dare.Expiring || this.state.dare.Expiring.trim() === "") {
      errors.Expiring = true;
    }
    
    if (!this.state.dare.Start || this.state.dare.Start.trim() === "") {
      errors.Start = true;
    }
    
    if (!this.state.dare.title || this.state.dare.title.trim() === "") {
      errors.title = true;
    }
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.dare._id) {
      // Edit
      this.props.actionsDare.saveDare(this.state.dare).then(data => {
        this.props.navigation.navigate("DareList");
      });
    } else {
      // Create
      this.props.actionsDare.createDare(this.state.dare).then(data => {
        this.props.navigation.navigate("DareList");
      });
    }
  }

  // Show content
  render() { 
    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Dare</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <ListItem>
              <Left>
                <Label>Activate</Label>
              </Left>
              <Right>
                <Switch
                  value={this.state.dare.Activate }
                  onValueChange={value =>
                    this.setState(Object.assign(this.state.dare, { Activate: value }))
                  }
                />
              </Right>
            </ListItem>
            
            
            <Item floatingLabel>
              <Label>
                Description
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.dare, { Description: value }))
                }
                value={this.state.dare.Description && this.state.dare.Description.toString()}
              />
            </Item>
          
            <Item stackedLabel {...(this.state.errors && this.state.errors.Expiring === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.Expiring === true ? { style: styles.validatorLabel } : {})}>
                Expiring *
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.dare.Expiring }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.dare, { Expiring: value }))
                }
              />
            </Item>
            {this.state.errors && this.state.errors.Expiring === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
            
            <Item stackedLabel {...(this.state.errors && this.state.errors.Start === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.Start === true ? { style: styles.validatorLabel } : {})}>
                Start *
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.dare.Start }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.dare, { Start: value }))
                }
              />
            </Item>
            {this.state.errors && this.state.errors.Start === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
            
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.title === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.title === true ? { style: styles.validatorLabel } : {})}>
                Title *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.dare, { title: value }))
                }
                value={this.state.dare.title && this.state.dare.title.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.title === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          

          {/* RELATIONS */}
          
          {/* Relation 1:m Author with User */}
          
          <Item stackedLabel>
            <Label >
              Author
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.dare.Author }
              value={this.state.dare.Author }
              onValueChange={value =>
                this.setState(Object.assign(this.state.dare, { Author: value }))
              }
            >
              {this.props.listUser &&
                this.props.listUser.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with DaringUser */}

          

          </Form>
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
DareEdit.propTypes = { 
  actionsDare: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    dare: state.DareEditReducer.dare,
    listUser: state.DareEditReducer.listUser,
    listDaringUser: state.DareEditReducer.listDaringUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DareEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});