Feature: Webauthn registration

  Scenario Outline: As user I can register on the WeabuthnIO
    Given I go to the <url>
    When I register with <username>
    When I Authenticate with <username>
    Then I should see success message with <text>

    Examples: 
      | url                  | username | text              |
      | https://webauthn.io/ | test     | You're logged in! |
