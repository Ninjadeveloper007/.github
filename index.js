{
  "total_count": 1,
  "environments": [
    {
      "id": 161088068,
      "node_id": "MDExOkVudmlyb25tZW50MTYxMDg4MDY4",
      "name": "staging",
      "url": "https://api.github.com/repos/github/hello-world/environments/staging",
      "html_url": "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging",
      "created_at": "2020-11-23T22:00:40Z",
      "updated_at": "2020-11-23T22:00:40Z",
      "protection_rules": [
        {
          "id": 3736,
          "node_id": "MDQ6R2F0ZTM3MzY=",
          "type": "wait_timer",
          "wait_timer": 30
        },
        {
          "id": 3755,
          "node_id": "MDQ6R2F0ZTM3NTU=",
          "prevent_self_review": false,
          "type": "required_reviewers",
          "reviewers": [
            {
              "type": "User",
              "reviewer": {
                "login": "Ninjadeveloper007",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://github.com/images/error/Ninjadeveloper007_happy.gif",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Ninjadeveloper007",
                "html_url": "https://github.com/Ninjadeveloper007",
                "followers_url": "https://api.github.com/users/Ninjadeveloper007/followers",
                "following_url": "https://api.github.com/users/Ninjadeveloper007/following{/other_user}",
                "gists_url": "https://api.github.com/users/Ninjadeveloper007/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Ninjadeveloper007/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Ninjadeveloper007/subscriptions",
                "organizations_url": "https://api.github.com/users/Ninjadeveloper007/orgs",
                "repos_url": "https://api.github.com/users/Ninjadeveloper007/repos",
                "events_url": "https://api.github.com/users/Ninjadeveloper007/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Ninjadeveloper007/received_events",
                "type": "User",
                "site_admin": true
              }
            },
            {
              "type": "Team",
              "reviewer": {
                "id": 1,
                "node_id": "MDQ6VGVhbTE=",
                "url": "https://api.github.com/teams/1",
                "html_url": "https://github.com/orgs/github/teams/justice-league",
                "name": "Justice League",
                "slug": "justice-league",
                "description": "A great team.",
                "privacy": "closed",
                "notification_setting": "notifications_enabled",
                "permission": "admin",
                "members_url": "https://api.github.com/teams/1/members{/member}",
                "repositories_url": "https://api.github.com/teams/1/repos",
                "parent": null
              }
            }
          ]
        },
        {
          "id": 3756,
          "node_id": "MDQ6R2F0ZTM3NTY=",
          "type": "branch_policy"
        }
      ],
      "deployment_branch_policy": {
        "protected_branches": false,
        "custom_branch_policies": true
      }
    }
  ]
}
