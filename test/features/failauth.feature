Feature: Webauthn negative authentication

  Scenario Outline: As user I can open the Weabuthn site
    Given I open the browser and load the <url>
    When I authenticate with <username>
    Then I should see an error message with <text>

    Examples: 
      | url                  | username | text                                        |
      | https://webauthn.io/ | test     | That username has no registered credentials |
