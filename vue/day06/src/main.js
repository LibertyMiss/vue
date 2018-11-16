import $ from 'jquery'
import './css/index.css'
import './css/index1.less'
import './css/index2.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
        return 'rgba(' + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ',0.5)'
    })
})