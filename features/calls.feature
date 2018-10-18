Feature: Managing Calls
  In order to create and list calls
  A user should be able to manage the set of calls

  Scenario: Registring User's Name
    Given the browser is at home page
    When the user type his name
    Then the app should show the user's name

  Scenario: Viewing Calls
    Given an user name is set
    When the browser is at home page
    Then the call list is visible
    And the new call form is visible

  Scenario: User Adding Call
    Given an user name is set
    When the browser is at home page
    And the user type a new call
    Then a new call should be showing in the call list

  Scenario: User View Existing Call
    Given an user name is set
    When the browser is at home page
    And the user select a call in the call's list
    Then the call should be visible in the page
