'use client';

import { NodeGroup } from "@/entities/node/_domain/types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/shared/ui/select";
import { Dispatch } from "react";

  export function NodeGroupSelect({
    nodeGroups,
    onSelect
  }: {
    nodeGroups: NodeGroup[],
    onSelect: Dispatch<string>
  }) {

    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-max">
                <SelectValue placeholder="Все" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Все</SelectItem>
                {nodeGroups.map(group => <SelectItem key={group.nodeGroup.id} value={group.nodeGroup.title}>{group.nodeGroup.title}</SelectItem>)}
            </SelectContent>
        </Select>
    )
  };
  