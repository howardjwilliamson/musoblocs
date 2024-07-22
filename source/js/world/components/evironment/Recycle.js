import
{ 
    Mesh, 
    MeshStandardMaterial, 
    TetrahedronGeometry
} from "three";

import
{
    Sfx, PlaySfx
} from "./Sfx";

const STATUS =
{
    inactive: {color:0x000066},
    active: {color:0x0000ff}
}

class Recycle extends Mesh
{

    constructor(result)
    {
        super
        (
            new TetrahedronGeometry(1, 0),
            new MeshStandardMaterial(STATUS.inactive)
        );
        this.active = false;
        this.position.set(2, 6, 2);
        console.log("Recycle created");
        this.result = result;
    }

    click()
    {
        if (this.active) return;
        this.active = true;
        this.position.z -= 0.1;
        this.material.color.setHex(STATUS.active.color);
        PlaySfx
        (
            Sfx["ding"].url, 1,
            () =>
            {
                this.active = false;
                this.position.z += 0.1;
                this.material.color.setHex(STATUS.inactive.color);
                this.result();                
            }
        );
    }

}

export { Recycle };