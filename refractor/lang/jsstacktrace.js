'use strict'

module.exports = jsstacktrace
jsstacktrace.displayName = 'jsstacktrace'
jsstacktrace.aliases = []
function jsstacktrace(Prism) {
  Prism.languages.jsstacktrace = {
    'error-message': {
      pattern: /^\S.*/m,
      alias: 'string'
    },
    'stack-frame': {
      pattern: /(^[ \t]+)at[ \t].*/m,
      lookbehind: true,
      inside: {
        'not-my-code': {
          pattern:
            /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
          alias: 'comment'
        },
        filename: {
          pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
          lookbehind: true,
          alias: 'url'
        },
        function: {
          pattern:
            /(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[()]/,
        keyword: /\b(?:at|new)\b/,
        alias: {
          pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
          alias: 'variable'
        },
        'line-number': {
          pattern: /:[0-9]+(?::[0-9]+)?\b/,
          alias: 'number',
          inside: {
            punctuation: /:/
          }
        }
      }
    }
  }
}