/**
 * @author {{{author}}}
 * @since {{{date}}}
 */

(function () {
    'use strict';

    angular
        .module('{{{moduleName}}}')
        .factory('{{{elementName}}}', {{{elementName}}});

    /* @ngInject */
    function {{{elementName}}}($log) {
        var factory = {};

        /// Factory Public API ///
        factory.method = method;
        ///////////////

        return factory;

        ///////////////

        function method() {
            // TODO autogenerated method stub...
        }
    }
})();
