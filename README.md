![Build-test](https://github.com/1itachi/sleep/actions/workflows/test.yml/badge.svg)
![Release](https://github.com/1itachi/sleep/actions/workflows/release.yml/badge.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


### Note: 
#### Job execution time - Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails to complete.
#### Workflow run time - Each workflow run is limited to 72 hours. If a workflow run reaches this limit, the workflow run is cancelled.


### Usage:

Setting random to true will result in action sleeping for an arbitrary time with an upper limit of set minutes.
```

steps:
      - name: Wait
        uses: 1itachi/sleep@v1
        with:
          minutes: '5'
          random: 'true'
 ```   
 
 Using the action can be used without random to sleep for set minutes.
```

steps:
      - name: Wait
        uses: 1itachi/sleep@v1
        with:
          minutes: '5'
 ``` 
 
` Please raise an issue for bugs and suggestions.`
          
