let symmetryTitle = "Symmetric vs Asymmetric";
let symmetryDesc = "Cores are either Symmetric or Asymmetric. Symettric cores typically have a smoother, more continous and controllable shape when compared to Asymmetric cores. Aysmmetric cores tend to have a much sharper change of direction and can be harder to control. This resutls in Asymmetric cores having a shorter hook phase than Symmetric cores do.";
let pinTitle = "Pin / CG / Mass Bias";
let pinDesc = "Pin - is the top of the core and represents the top of the ball. This is usually depicted by a solid color dot, though some companies use an empty dot with colored border\nCG - is the center of gravity of the core. This is usually marked, but the mark used varies from ball to ball. Typically this is within a few inches of the pin.\nMass Bias = is where the core is cloesest to the coverstock of the bowling ball. This is only marked on Asymmetric balls and the mark used varies from ball to ball. To find the mass bias on symmetrical cores, for drilling purposes, you draw a line through the pin and CG then put a mark at 6-3/4 inches away from the pin."
let diffTitle = "Differential";
let diffDesc = "Differential defines how much a bowling ball will flare. Essentially the more flare, the more hook a ball will have. Differential values range from 0.0 - 0.06.\nLow Diff: 0.0-0.025\nMedium Diff: 0.025-0.047\nHigh Diff: 0.047-0.06";

let strengthTitle = "Strong vs Weak";
let strengthDesc = "Stregnth applies to both cores and coverstocks\nContrary to what people may think, strong doesn't mean more hook, it only means it hooks earlier. Stronger balls like to pick up in the midlane and start hooking very early making them ideal for heavier oil conditions. Weaker balls will skid further down the lane before beginning to hook, this makes them more ideal for when your stronger balls are hooking too early."

let solidTitle = "Solid";
let solidDesc = "Solid coverstocks generally have the most friction and will hook earliest, basically solid coverstocks are the strongest cover. This early hook makes solid coverstocks ideal for higher volums of oil or longer paterns. All other coverstocks are created using a solid coverstock as a base, then using additives to alter it."
let pearlTitle = "Pearl";
let pearlDesc = "Pearl coverstocks generally have the least amount of friction which allows them to get further down the lane before hooking. This results in pearl coverstocks having the sharpest change of direction."
let hybTitle = "Hybird";
let hybDesc = "Hybrid coverstocks are a mix of solid and pearl coverstocks. This mixture allows a ball to have the early read of a solid while still retaining energy for a sharper back end. The pearl in the ball also helps it clear the early friction easier than a purely solid ball would"
let urethaneTitle = "Urethane vs Reactive";
let urethaneDesc = "Urethane and Reactive both have solid, pearl, and hybrid variations. The major difference between urethane and reactive is that urethane reads the friction much earlier which results is a more controllable and predictable shape downlane. Urethane balls are great for shorter lane conditions or when wanting to play straighter on the fresh. Some people believe urethane can be used on burnt lanes when there is a lot of early friction, this isn't true as urethane balls will read that friction too early and generally won't go where you want it to.";
let finishTitle = "Finshes";
let finishDesc = "The finish on a coverstock is basically how shiny or dull the ball looks. Generally the duller the ball, the earlier it will begin to hook. Typicallyy balls will be at 500-4000 grit abralon, or polished. The method for polishing changes between comapnies. The finish can be altered and should be freshened up about every 30 games, before a tournament or important event, or when your ball stops reacting well the first thing you can try is altering the finish on it."

function changeText(titleText, descText, type){
    x = document.getElementById(titleText);
    y = document.getElementById(descText);

    if(type == "sym"){
        x.innerText = symmetryTitle;
        y.innerText = symmetryDesc;
    }else if(type == "pin"){
        x.innerText = pinTitle;
        y.innerText = pinDesc;
    }else if(type == "diff"){
        x.innerText = diffTitle;
        y.innerText = diffDesc;
    }else if(type == "strength"){
        x.innerText = strengthTitle;
        y.innerText = strengthDesc;
    }else if(type == "solid"){
        x.innerText = solidTitle;
        y.innerText = solidDesc;
    }else if(type == "pearl"){
        x.innerText = pearlTitle;
        y.innerText = pearlDesc;
    }else if(type == "hyb"){
        x.innerText = hybTitle;
        y.innerText = hybDesc;
    }else if(type == "urethane"){
        x.innerText = urethaneTitle;
        y.innerText = urethaneDesc;
    }else if(type == "finishes"){
        x.innerText = finishTitle;
        y.innerText = finishDesc;
    }
}