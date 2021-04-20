module.exports = {
    
    "presets": [
        ["@babel/env", {"targets": {
            "node": true
          }}]
     ],
     "plugins": [
         [
           "@babel/plugin-transform-runtime",
           {
             "absoluteRuntime": false,
             "corejs": false,
             "helpers": true,
             "regenerator": true,
             "useESModules": true
           }
         ],
        
            // '@babel/plugin-syntax-dynamic-import',
            // '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            // '@babel/plugin-proposal-json-strings',
            // [
            //     '@babel/plugin-proposal-decorators',
            //     {
            //         legacy: true
            //     }
            // ],
            // '@babel/plugin-proposal-function-sent',
            // '@babel/plugin-proposal-export-namespace-from',
            // '@babel/plugin-proposal-numeric-separator',
            // '@babel/plugin-proposal-throw-expressions',
            // '@babel/plugin-proposal-object-rest-spread',
            // '@babel/plugin-transform-object-assign'
        
       ],
     "ignore": [ /@babel[\/\\]runtime/, /[\/\\]test/, /[\/\\]dist/, /[\/\\]core-js/     ,
            ,/[\/\\]node_modules/]
  };