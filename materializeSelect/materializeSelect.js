/**
 * Created by John Board on 27/05/2017.
 */
import './materializeSelect.html';

Template.materializeSelect.onRendered(() => {
    template = Template.instance();

    template.autorun(function(){
        let data = Template.currentData().data;
        renderSelect(template, data);
    });
});

Template.materializeSelect.events({
    "change select": (event, template) => {
        let callback = template.data.callback;
        if(callback){
            callback(event)
        }
    }
});

function renderSelect(template, data){
    template.$(".reactive-select").empty();
    $(".reactive-select").select2({
        data: data
    });
}