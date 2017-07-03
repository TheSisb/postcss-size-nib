var postcss = require('postcss');
var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('convert size to width and height', () => {
    return run('a{size: 10px;}', 'a{width: 10px;height: 10px;}', { });
});

it('convert two size values to width and height', () => {
    return run('a{size: 10px 15px;}', 'a{width: 10px;height: 15px;}', { });
});
